import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

import axios from 'axios'
import * as _ from 'lodash'
import {decode} from './utilities'
import {login} from '@skedulo/sdk'

const I = require('inquirer')

const methodQuestion = [
    {
        name: 'loginMethod',
        type: 'list',
        message: 'Select how you would like to log in : ',
        choices: [
            'Interactive',
            'JWT'
        ],
        default: 1
    }
]

const apiServerQuestion = [
    {
        name: 'assocApiServer',
        type: 'input',
        message: 'Enter the associated api-server for this JWT (include protocol, i.e https://) : ',
        default: 'https://api.skedulo.com'
    }
]

const serverQuestions = [
    {
        name: 'skeduloInstance',
        type: 'list',
        message: 'Select Server : ',
        choices: [
            'new.skedulo.com',
            'dev-phoenix.test.skl.io',
            'master-phoenix.test.skl.io',
            new I.Separator(),
            'Use Team Name'
        ],
        default: 0
    },
    {
        name: 'skeduloInstance',
        when: (answers: any) => answers.skeduloInstance === 'Use Team Name',
        type: 'input',
        message: 'Enter Team Name (with skedulo domain included) : ',
        validate: (value: any) => value && value.length > 0
    }
]

const vendorQuestion = [
    {
        name: 'vendor',
        type: 'list',
        message: 'Select Vendor : ',
        choices: [
            'salesforce',
            'salesforce-sandbox',
            'standalone'
        ],
        default: 1
    }
]

const skedApiAccessTokenQuestion = [
    {
        name: 'skedApiAccessToken',
        type: 'input',
        validate: (skedApiAccessToken: string) => {

            return new Promise((resolve, reject) => {
                const res = decode(skedApiAccessToken)

                if (res) resolve(true)
                else reject('Invalid skedApiAccessToken. Please try again.')

            })
        },
        message: `Enter your skedApiAccessToken. Run the following on the js-console from phoenix and then paste the result here: copy(JSON.parse(localStorage.auth).skedApiAccessToken) : `
    }
]

export async function getServer() {

    let apiServer: string = ''
    let skedApiAccessToken: string = ''

    const {skeduloInstance} = await I.prompt(serverQuestions) as { skeduloInstance: string }
    const {vendor} = await I.prompt(vendorQuestion) as { vendor: string }

    const homeDir = os.homedir()
    const skedFile = path.join(homeDir, '.phoenix-session.json')

    testSkedFile(skedFile)

    const activeSessions = cleanSkedFile(require(skedFile))
    const relevantSessions = activeSessions.filter(s => s.instance === skeduloInstance)

    if (relevantSessions.length > 0) {

        const sessionQuestion = [{
            name: 'selectedSession',
            type: 'list',
            message: 'Select Session : ',
            choices: relevantSessions.map(s => ({name: s.username, value: s})).concat([{
                name: 'None',
                value: null as any
            }])
        }]

        const {selectedSession} = await I.prompt(sessionQuestion) as { selectedSession?: SkedFileItem }

        if (selectedSession) {
            apiServer = selectedSession.apiServer
            skedApiAccessToken = selectedSession.skedApiAccessToken
        }
    }

    if (!skedApiAccessToken) {
        const {loginMethod} = await I.prompt(methodQuestion) as { loginMethod: string }

        if (loginMethod === 'JWT') {
            const {skedApiAccessToken: tokenInput} = await I.prompt(skedApiAccessTokenQuestion) as { skedApiAccessToken: string }
            const {assocApiServer} = await I.prompt(apiServerQuestion) as { assocApiServer: string }
            skedApiAccessToken = tokenInput
            apiServer = assocApiServer

        } else {
            const {authData, env} = await login(skeduloInstance, vendor, {}, true)
            skedApiAccessToken = authData.skedApiAccessToken
            apiServer = env.API_SERVER

        }
    }

    const decodedToken = decode(skedApiAccessToken).payload

    const updatedSessions = [...activeSessions, {
        apiServer,
        instance: skeduloInstance,
        skedApiAccessToken,
        username: decodedToken['https://api.skedulo.com/username'],
        expires: decodedToken.exp * 1000
    }]

    saveSession(skedFile, updatedSessions)

    const headers = {
        Authorization: 'Bearer ' + skedApiAccessToken
    }

    const apiHttpInstance = axios.create({
        baseURL: apiServer,
        headers
    })

    return {apiServer, skedApiAccessToken, decodedToken, apiHttpInstance, headers}
}

interface SkedFileItem {
    apiServer: string
    instance: string
    username: string
    skedApiAccessToken: string
    expires: number
}

function saveSession(skedFile: string, updatedSessions: SkedFileItem[]) {
    // Remove duplicates
    const sessions = _.values(_.keyBy(updatedSessions, s => s.username))
    fs.writeFileSync(skedFile, JSON.stringify(sessions) + '\n')
}

function cleanSkedFile(activeSessions: any): SkedFileItem[] {
    let now = Date.now()
    return activeSessions.filter((s: SkedFileItem) => (now - s.expires) <= 5000)
}

function testSkedFile(skedFile: string) {

    const exists = fs.existsSync(skedFile)

    if (!exists) {
        fs.writeFileSync(skedFile, JSON.stringify([]) + '\n', 'utf8')
    }
}

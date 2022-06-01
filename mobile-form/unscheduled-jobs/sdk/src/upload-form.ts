
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

import * as _ from 'lodash'
import { AxiosInstance } from 'axios'
import { getServer } from './get-server'
import { selectForm } from './select-form'
import { linkDefinedJobTypesToForm, uploadFiles } from './utilities'


export async function uploadForm(filesPath: string) {

  try {

    //Check that compilation has been run
    if (!fs.existsSync(filesPath)) {
      throw new Error('Form has not been compiled or dist directory does not exist')
    }

    const files = fs.readdirSync(filesPath)

    // Check definition.json and validate if "jobTypes" is defined
    if(files.indexOf('definition.json') === -1) {
      throw new Error('definition.json not present.')
    }

    const definitionContents = fs.readFileSync(path.join(filesPath, 'definition.json'), 'utf8')
    const parsedDefinition = JSON.parse(definitionContents)

    if(!parsedDefinition.jobTypes || !_.isArray(parsedDefinition.jobTypes)) {
      throw new Error('definition.json does not contain "jobTypes". Please specify an array or jobtypes at the root of definition.json')
    }

    const { apiHttpInstance, headers, apiServer } = await getServer()
    const formId = await selectForm(apiHttpInstance)

    // Link job types defined in definition.json into the given form
    await linkDefinedJobTypesToForm(apiHttpInstance, parsedDefinition.jobTypes, formId)

    const validFilePaths = files.map(file => path.join(filesPath, file))
    const res = await uploadFiles(apiServer, headers, formId, validFilePaths)

    console.log(`
Form Uploaded Successfully!
ID: ${res.id}
FormID: ${res.formId}
Version: ${res.version}
    `)
  } catch (e) {
    console.error(e.message)
    console.info('Form upload failed')
  }
}
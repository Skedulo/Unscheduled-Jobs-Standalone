
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

import * as _ from 'lodash'
import { AxiosInstance } from 'axios'
import { getServer } from './get-server'
import { getCustomFieldData, getCustomSchemaData } from './utilities'
const I = require('inquirer')


export async function exportFields(filesPath: string) {

  try {

    const { apiHttpInstance, headers, apiServer } = await getServer()

    const customFieldData = await getCustomFieldData(apiHttpInstance)
    const customSchemaData = await getCustomSchemaData(apiHttpInstance)

    const overwriteQuestion = [{
      name: 'overwrite',
      type: 'confirm',
      message: 'Previously exported field/schema files will be overwritten, do you wish to continue?'
    }]

    const { overwrite } = await I.prompt(overwriteQuestion)

    if (overwrite) {
        if (!fs.existsSync('./custom_field_config')) {
            fs.mkdirSync('./custom_field_config')
        }

        fs.writeFileSync('./custom_field_config/fields.json', JSON.stringify(customFieldData), { encoding: 'utf-8' })
        fs.writeFileSync('./custom_field_config/schemas.json', JSON.stringify(customSchemaData), { encoding: 'utf-8' })

        console.log('Export successful.')
    } else {
        console.log('Export aborted.')
    }
  } catch (e) {
    console.error(e.message)
  }
}

import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

import * as _ from 'lodash'
import { AxiosInstance } from 'axios'
import { getServer } from './get-server'
import { getCustomFieldData, getCustomSchemaData, setCustomFieldData, setCustomSchemaData } from './utilities'
const I = require('inquirer')


export async function importFields(filesPath: string) {

  try {

    // Check that files exist to import
    if (!fs.existsSync('./custom_field_config/fields.json') || !fs.existsSync('./custom_field_config/schemas.json')) {
      console.log('No configuration files found to import.')
      return
    }

    const { apiHttpInstance, headers, apiServer } = await getServer()

    const currentCustomFieldData = await getCustomFieldData(apiHttpInstance)
    const currentCustomSchemaData = await getCustomSchemaData(apiHttpInstance)

    const overwriteQuestion = [{
      name: 'overwrite',
      type: 'confirm',
      message: 'This action will overwrite any currently set custom fields, do you wish to continue?'
    }]

    const backupQuestion = [{
      name: 'backup',
      type: 'confirm',
      message: 'Would you like to create a backup of the fields currently set?'
    }]

    const { overwrite } = await I.prompt(overwriteQuestion)

    if (overwrite) {
        const { backup } = await I.prompt(backupQuestion)
        if (backup) {
          if (!fs.existsSync('./custom_field_config')) {
            fs.mkdirSync('./custom_field_config')
          }

          fs.writeFileSync('./custom_field_config/fields-backup.json', JSON.stringify(currentCustomFieldData), { encoding: 'utf-8' })
          fs.writeFileSync('./custom_field_config/schemas-backup.json', JSON.stringify(currentCustomSchemaData), { encoding: 'utf-8' })
        }

        const customFieldData = fs.readFileSync('./custom_field_config/fields.json', { encoding: 'utf-8' })
        const customSchemaData = fs.readFileSync('./custom_field_config/schemas.json', { encoding: 'utf-8' })

        await setCustomFieldData(apiHttpInstance, JSON.parse(customFieldData))
        await setCustomSchemaData(apiHttpInstance, JSON.parse(customSchemaData))

        console.log('Import successful.')
    } else {
        console.log('Import aborted.')
    }
  } catch (e) {
    console.error(e.message)
  }
}

import * as fs from 'fs'
import * as path from 'path'

import { selectExistingForm } from './select-existing-form'
import { getServer } from './get-server'
import { removeFiles } from './utilities'

import { AxiosInstance } from 'axios'
const I = require('inquirer')

export async function removeForm() {

  try {

    const { apiHttpInstance, headers, apiServer } = await getServer()
    const formId = await selectExistingForm(apiHttpInstance)

    if (!formId) {
      console.error("No forms exist to remove!")
      return
    }

    const questions = [
      {
        name: 'formRemoveConfirm',
        message: 'Are you sure you want to remove this form?',
        type: 'confirm'
      }
    ]

    const { formRemoveConfirm } = await I.prompt(questions)

    // If form delete is cancelled, return
    if(!formRemoveConfirm) return

    await removeFiles(apiHttpInstance, formId)

    console.log(
      "Successfully removed form!"
    )
  } catch (e) {
    console.error(e.message)
    console.info('Form remove failed')
  }
}



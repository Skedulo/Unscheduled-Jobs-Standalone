
import * as fs from 'fs'
import * as path from 'path'

import { selectExistingForm } from './select-existing-form'
import { getServer } from './get-server'
import { getFormById, removeJobLink } from './utilities'

import { AxiosInstance } from 'axios'
const I = require('inquirer')

export async function removeLink() {

  try {

    const { apiHttpInstance, headers, apiServer } = await getServer()
    const formId = await selectExistingForm(apiHttpInstance)
    
    if (!formId) {
      console.error("No forms exist to edit!")
      return
    }

    const formData = await getFormById(apiHttpInstance, formId)

    if (formData.jobTypes.length == 0) {
      console.log("No Job Types are connected this form.")
      return
    }
  
    const questions = [
      {
        name: 'linkedJobType',
        type: 'list',
        message: 'Which Job Type would you like to unlink?',
        choices: formData.jobTypes
      }
    ]

    const { linkedJobType } = await I.prompt(questions)

    await removeJobLink(apiHttpInstance, linkedJobType, formId)

    console.log(
      "Successfully removed job type link!"
    )

  } catch(e) {
    console.error(e.stack)
    console.error('Link Deletion failed. Please review the error above')
  }

  return 

}


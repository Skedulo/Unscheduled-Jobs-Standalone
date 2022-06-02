
import * as fs from 'fs'
import * as path from 'path'

import { selectExistingForm } from './select-existing-form'
import { getServer } from './get-server'
import { getFormById, getAllJobTypes, linkJobTypeToForm } from './utilities'

import { AxiosInstance } from 'axios'
import * as _ from 'lodash'
const I = require('inquirer')

export async function addLink() {

  try {

    const { apiHttpInstance, headers, apiServer } = await getServer()
    const formId = await selectExistingForm(apiHttpInstance)

    if (!formId) {
      console.error("No forms exist to edit!")
      return
    }

    const allTypes = await getAllJobTypes(apiHttpInstance)
    const formData = await getFormById(apiHttpInstance, formId)
    const currentlyLinkedTypes = formData.jobTypes

    const linkableTypes = _.difference(allTypes, currentlyLinkedTypes)

    const questions = [
      {
        name: 'jobTypeToLink',
        type: 'list',
        message: 'Which Job Type would you like to link?',
        choices: linkableTypes
      }
    ]

    const { jobTypeToLink } = await I.prompt(questions)


    await linkJobTypeToForm(apiHttpInstance, jobTypeToLink, formId)

    console.log(
      "Successfully linked job type!"
    )

  } catch(e) {
    console.error(e.stack)
    console.error('Type linked failed. Please review the error above')
  }

  return

}


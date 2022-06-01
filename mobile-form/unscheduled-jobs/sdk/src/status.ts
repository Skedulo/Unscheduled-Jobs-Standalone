
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

import * as _ from 'lodash'
import { AxiosInstance } from 'axios'
import { getServer } from './get-server'
import { getAllFormMetaData } from './utilities'


export async function status() {

  try {

    const { apiHttpInstance, headers, apiServer } = await getServer()
    const allFormData: [any] = await getAllFormMetaData(apiHttpInstance)

    console.log("*** Currently Deployed Forms ***")

    allFormData.map(formData => {
      const jobTypeString = formData.jobTypes.join(", ")
      const forms: [any] = formData.formRev.definition.forms

      console.log("")
      console.log(formData.name)
      console.log("")
      console.log("Form Deploy Id: " + formData.id)
      console.log("Form Revision: " + formData.formRev.version)
      console.log("Linked Job Types: " + jobTypeString)
      console.log("Definition: ")
      forms.map(form => {
        console.log("   Form Name: " + form.name)
        console.log("   Form Root: " + form.root)
        console.log("")
      })
    })

  } catch (e) {
    console.error(e.message)
    console.info('Form status failed to get metadata')
  }
}
import { AxiosInstance } from 'axios'
const I = require('inquirer')

export async function selectExistingForm(apiInstance: AxiosInstance) {

  const { data } = await apiInstance.get('/customform/form')
  const { result } = data

  const choices = [
    ...result.map((item: any) => ({ value: item.id, name: item.name }))
  ]

  const questions = [
    {
      name: 'formId',
      type: 'list',
      message: 'Select Form : ',
      choices
    }
  ]

  const { formId } = await I.prompt(questions)
  return formId
}
import { AxiosInstance } from 'axios'
const I = require('inquirer')

export async function selectForm(apiInstance: AxiosInstance) {

  const { data } = await apiInstance.get('/customform/form')
  const { result } = data



  const choices = [
    ...result.map((item: any) => ({ value: item.id, name: item.name })),
    new I.Separator(),
    { value: 'create', name: 'Create New Form' }
  ]

  const questions = [
    {
      name: 'formId',
      type: 'list',
      message: 'Select Form : ',
      choices
    },
    {
      name: 'formName',
      when: (answers: any) => answers.formId === 'create',
      type: 'input',
      message: 'Enter Name of form : ',
      validate: (value: any) => value && value.length > 0
    }
  ]

  const { formId, formName } = await I.prompt(questions)

  if (formId === 'create') {

    const { data } = await apiInstance.post('/customform/form', { name: formName })
    const { created } = data

    return created.id
  } else {
    return formId
  }

}
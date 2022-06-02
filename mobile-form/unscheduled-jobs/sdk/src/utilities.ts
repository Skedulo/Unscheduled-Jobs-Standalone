
import * as fs from 'fs'

import * as _ from 'lodash'
import * as request from 'request-promise'
import { AxiosInstance } from 'axios'
import * as jwt from 'jsonwebtoken'

interface JWTHeader {
  typ: string
  alg: 'RS256' | 'HS256'
  kid: string
}

interface DecodedJWT {
  header: JWTHeader
  payload: SkedJWT
}

export interface SkedJWT {

  // No idea what this is
  at_hash: string

  'https://api.skedulo.com/name': string,
  'https://api.skedulo.com/organization_id': string,
  'https://api.skedulo.com/username': string,

  nonce: string

  // Issuer
  iss: string,
  // Sked-Env | UserId
  sub: string,
  // Audience | Client ID
  aud: string,
  // Expiry in Seconds
  exp: number,
  // Issue date in seconds
  iat: number
}

/**
 * Synchronously decode the given JWT into its parts
 * without verifying the signature
 */
export function decode(token: string): DecodedJWT {
  return jwt.decode(token, { complete: true }) as DecodedJWT
}

// Automatically link all job types to the given form.
export async function linkDefinedJobTypesToForm(apiInstance: AxiosInstance, updatedJobTypes: string[], formId: string) {
  const { data } = await apiInstance.get(`/customform/form/${formId}`)
  const { result: formData } = data
  const { jobTypes } = formData

  const addedJobTypes = _.difference(updatedJobTypes, jobTypes)
  const removedJobTypes = _.difference(jobTypes, updatedJobTypes)

  if (removedJobTypes.length > 0) {
    await Promise.all(removedJobTypes.map(jt => apiInstance.delete(`/customform/link_form?form_id=${formId}&job_type_name=${jt}`)))
  }

  if (addedJobTypes.length > 0) {
    await Promise.all(addedJobTypes.map(jt => apiInstance.post(`/customform/link_form`, { formId, jobTypeName: jt })))
  }

  return true
}

export async function linkJobTypeToForm(apiInstance: AxiosInstance, jobType: string, formId: string) {

  const response = await apiInstance.post(`/customform/link_form`, { formId, jobTypeName: jobType })

  return true
}

export async function uploadFiles(apiServer: string, headers: {}, formId: string, files: string[]) {

  const url = `${apiServer}/customform/file/upload/${formId}`

  const formData = {
    attachments: files.map(file => fs.createReadStream(file))
  }

  const response = await request.post({
    url,
    headers,
    formData
  })

  return JSON.parse(response).created
}

export async function removeFiles(apiInstance: AxiosInstance, formId: string) {
  const url = `/customform/form/${formId}`

  const response = await apiInstance.delete(url)

  return true
}

export async function removeJobLink(apiInstance: AxiosInstance, jobTypeName: string, formId: string) {
  const url = `/customform/link_form?job_type_name=${jobTypeName}&form_id=${formId}`

  const response = await apiInstance.delete(url)

  return true
}

export async function getFormById(apiInstance: AxiosInstance, id: string) {
  const url = '/customform/form/' + id

  const response = await apiInstance.get(url)

  return response.data.result
}

export async function getAllJobTypes(apiInstance: AxiosInstance) {
  const url = '/custom/vocabularies'

  const response = await apiInstance.get(url)

  const allJobTypes = _.map((response.data.result.Jobs.Type as [any]), type => type.value)
  
  return allJobTypes
}

export async function getAllFormMetaData(apiInstance: AxiosInstance) {
  const url = '/customform/form'
  
  const response = await apiInstance.get(url)

  return response.data.result
}

export async function getCustomFieldData(apiInstance: AxiosInstance) {
  const url = '/custom/fields'

  const response = await apiInstance.get(url)

  return response.data.result
}

export async function setCustomFieldData(apiInstance: AxiosInstance, customFieldData: any[]) {
  const url = '/custom/fields'

  const response = await apiInstance.post(url, customFieldData)

  return response.data.result
}

export async function getCustomSchemaData(apiInstance: AxiosInstance) {
  const url = '/custom/schemas'

  const response = await apiInstance.get(url)

  return response.data.result
}

export async function setCustomSchemaData(apiInstance: AxiosInstance, customSchemaData: any[]) {
  const url = '/custom/schemas'

  const response = await apiInstance.post(url, customSchemaData)

  return response.data.result
}
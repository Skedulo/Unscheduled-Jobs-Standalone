
import axios from "axios"
// import { HttpClient } from "TypeGen"
// import { logError } from "../helper"

export const path = "/get-resource-available"

export const handler = async (body: { [K: string]: any }, headers: any) => {
  const apiToken = headers.Authorization.split('Bearer')[1].trim()
  const dataDetails = body as any;
  console.log("🚀 ~ file: index.ts ~ line 10 ~ handler ~ dataDetails", dataDetails);

  const url = `https://api.au.skedulo.com/availability/resources`

  return axios.post(url, dataDetails,  {
    headers: { Authorization: `Bearer ${apiToken}` },
  })
    .then(response => {
      console.log('response', response)
      return {
        status: 200,
        body: { url: (response as any).data }
      }
    })
    .catch(async (error) => {
      const errorDetails = error?.response?.data

      // create http client instance
      // const apiToken = headers.Authorization.split('Bearer')[1].trim()
      // const apiServer = headers['sked-api-server']
      // const httpClient = new HttpClient(apiToken, apiServer)

      // const { errorLogs, response } = logError("getCourseLink", errorDetails?.statusCode, errorDetails?.message, JSON.stringify({
      //   url,
      //   errorDetails
      // }))

      // await httpClient.mutate(errorLogs)

      return errorDetails
    })

}

interface RequestData {
  moduleID: string
  groupID: string
  externalUserID: string
  apiKey: string
}
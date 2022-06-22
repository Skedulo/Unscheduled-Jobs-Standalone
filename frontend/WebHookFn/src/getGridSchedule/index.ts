
import axios from "axios"

export const path = "/get-grid-schedule"

export const handler = async (body: { [K: string]: any }, headers: any) => {
  const apiToken = headers.Authorization.split('Bearer')[1].trim()
  const dataDetails = body as any;

  const url = `https://api.au.skedulo.com/planr/grid/schedule`

  return axios.post(url, dataDetails,  {
    headers: { Authorization: `Bearer ${apiToken}` },
  })
    .then(response => {
      return {
        status: 200,
        body: { url: (response as any).data }
      }
    })
    .catch(async (error) => {
      const errorDetails = error?.response?.data

      return errorDetails
    })

}

interface RequestData {
  moduleID: string
  groupID: string
  externalUserID: string
  apiKey: string
}
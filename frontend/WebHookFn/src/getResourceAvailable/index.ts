
import axios from "axios"
import { constants } from "../constants";

export const path = "/get-resource-available"

export const handler = async (body: { [K: string]: any }, headers: any) => {
  const apiToken = headers.Authorization.split('Bearer')[1].trim()
  const dataDetails = body as any;

  const url = constants.API_GET_AVAILABLE_RESOURCE;

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
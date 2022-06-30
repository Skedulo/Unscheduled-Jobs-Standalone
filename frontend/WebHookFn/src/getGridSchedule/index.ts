
import axios from "axios"
import { constants } from "../constants";

export const path = "/get-grid-schedule"

export const handler = async (body: { [K: string]: any }, headers: any) => {
  const apiToken = headers.Authorization.split('Bearer')[1].trim()
  const dataDetails = body as any;

  const url = constants.API_GET_GRID_SCHEDULE;

  return axios.post(url, dataDetails,  {
    headers: { Authorization: `Bearer ${apiToken}` },
  })
    .then(response => {
      return {
        status: 200,
        body: { url: response?.data }
      }
    })
    .catch(async (error) => {
      const errorDetails = error?.response?.data
      return errorDetails
    })

}
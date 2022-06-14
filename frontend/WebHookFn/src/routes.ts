
/**
 * Describe the entry-point into the "skedulo-function" by updating the
 * array returned by the `getRoutes` method with additional routes
 */
import * as _ from 'lodash'
import * as pathToRegExp from 'path-to-regexp'

import { FunctionRoute } from '@skedulo/sdk-utilities'
import * as getResourceAvailable from './getResourceAvailable';

// tslint:disable-next-line:no-empty-interface
interface RequestPayload {
}

export function getCompiledRoutes() {
  return getRoutes().map(route => {

    const regex = pathToRegExp(route.path)

    return {
      regex,
      method: route.method,
      handler: route.handler
    }
  })
}

function getRoutes(): FunctionRoute[] {
  return [
    // {
    //   method: 'get',
    //   path: '/ping',
    //   handler: async (__, headers) => {

    //     const apiToken = headers.Authorization.split('Bearer')[1].trim()
    //     const apiServer = headers['sked-api-server']

    //     return {
    //       status: 200,
    //       body: { result: 'pong', apiServer, apiToken }
    //     }
    //   }
    // },
    // {
    //   method: 'post',
    //   path: '/action',
    //   handler: async (body: RequestPayload, headers) => {

    //     const apiToken = headers.Authorization.split('Bearer')[1].trim()
    //     const apiServer = headers['sked-api-server']

    //     return {
    //       status: 200,
    //       body: { apiToken, apiServer, requestBody: body }
    //     }
    //   }
    // },
    {
      method: 'post',
      path: getResourceAvailable.path,
      handler: getResourceAvailable.handler
    }
  ]
}

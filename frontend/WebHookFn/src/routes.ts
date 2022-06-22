
/**
 * Describe the entry-point into the "skedulo-function" by updating the
 * array returned by the `getRoutes` method with additional routes
 */
import * as _ from 'lodash'
import * as pathToRegExp from 'path-to-regexp'

import { FunctionRoute } from '@skedulo/sdk-utilities'
import * as getResourceAvailable from './getResourceAvailable';
import * as getGridSchedule from './getGridSchedule';

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
    {
      method: 'post',
      path: getResourceAvailable.path,
      handler: getResourceAvailable.handler
    },
    {
      method: 'post',
      path: getGridSchedule.path,
      handler: getGridSchedule.handler
    },
  ]
}

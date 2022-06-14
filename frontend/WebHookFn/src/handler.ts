/**
 * This is the "entry point" of the Skedulo function.
 * This usually does not need to be changed. Start writing your function
 * by defining a route in the `routes.ts` file.
 */
import { FunctionPayload, FunctionResponse, Function } from '@skedulo/sdk-utilities'

import { getCompiledRoutes } from './routes'

// Full handler for Skedulo Function.
const customHandler = async (payload: FunctionPayload): Promise<FunctionResponse<any>> => {
  const start = Date.now()

  try {

    const { method, path, headers, body, querystring } = payload

    const matchedRoute = getCompiledRoutes()
      .filter(route => route.method === method.toLowerCase())
      .find(route => !!route.regex.exec(path))

    if (matchedRoute) {
      return await matchedRoute.handler(body, headers, method, path, querystring)
    } else {
      return {
        status: 404
      }
    }
  } catch (e) {
    console.error(e)

    return {
      status: 400,
      body: {
        error: e.message
      }
    }
  } finally {
    console.info(`${payload.method}: ${payload.path}: ${Date.now() - start}ms`)
  }
}

// Create a function instance with the given handler
const skeduloFunction = new Function({ handler: customHandler })

// Export the handler, this step is required!
skeduloFunction.attachHandler(module.exports)

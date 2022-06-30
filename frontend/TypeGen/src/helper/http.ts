import axios, { AxiosInstance } from 'axios';
import { DocumentNode } from 'graphql';
import { camelCase, sortBy, toPairs } from 'lodash';
import { DATA_STATE, GraphqlMutationRequest, GraphQLRequest } from './interface';


const getQueryBody = (query: DocumentNode): string => query?.loc?.source.body || ''
const getOperationName = (query: DocumentNode): string => (query?.definitions[0] as any)?.name?.value || ''


export class HttpClient {
  private _instance: AxiosInstance

  constructor(
    token: string,
    api: string
  ) {
    this._instance = axios.create({
      baseURL: api,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  async mutate<T>(events: GraphqlMutationRequest<T>[]) {
    const actionEvents = events.map((eventItem, idx) => {
      const paramName = `${camelCase(eventItem.schema)}Item${idx}`
      return {
        type: eventItem.mutationType,
        schema: eventItem.schema,
        query: `${eventItem.mutationType}_${idx}: ${eventItem.mutationType}${eventItem.schema}(${eventItem.mutationType !== DATA_STATE.delete ? 'input' : 'UID'}: $${paramName}${eventItem.mutationType === "insert" ? `, idAlias: "${eventItem.mutationAlias}"` : ""})`,
        alias: eventItem.mutationAlias,
        paramName,
        params: eventItem.mutationArg
      }
    })

    const getType = (type: DATA_STATE) => {
      switch (type) {
        case DATA_STATE.add: return "New"
        case DATA_STATE.update: return "Update"
      }
      return "Delete"
    }
    const parameters = actionEvents.map(item => {
      if (item.type !== DATA_STATE.delete) {
        return `$${item.paramName}: ${getType(item.type)}${item.schema}!`
      }
      return `$${item.paramName}: ID!`
    })
    const query = `
      mutation pushData(${parameters.join(',')}) {
        schema {
          ${actionEvents.map(item => item.query).join('\n')}
        }
      }
    `

    const variables = actionEvents.reduce((result, item) => {
      // console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ variables 🏃‍♂️ item`, item)
      const data = { ...item.params }

      if (item.type === DATA_STATE.delete) {
        return {
          ...result,
          // @ts-ignore
          [item.paramName]: data.UID
        }
      }

      if (item.type === DATA_STATE.add) {
        // @ts-ignore
        delete data.UID
      }

      return { ...result, [item.paramName]: data }
    }, {})

    console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ query`, query)
    const result = await this.fetchGraphQl({
      query,
      operationName: 'pushData',
      variables
    }).then(res => {
      console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ res`, res)
      const result = (res as any)?.schema
      const values = sortBy(toPairs(result), ([key]) => key).map(([, val]) => val)
      return values
    })
      .catch(err => console.error(err.message))

    return result
  }

  fetch<T>(document: DocumentNode, variables: Record<string, any>) {
    return this.fetchGraphQl<T>({
      query: getQueryBody(document),
      operationName: getOperationName(document),
      variables
    })
  }

  fetchGraphQl = async <T>(body: GraphQLRequest): Promise<T> => {
    const res = await this._instance.post(
      '/graphql/graphql',
      body
    )
    return res?.data?.data
  }

  getAxiosInstance() {
    return this._instance
  }
}

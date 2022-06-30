import { assign, uniqueId } from 'lodash';
import { DATA_STATE, GraphqlMutationRequest } from './interface';

export class DataManager<T> {
  items: GraphqlMutationRequest<T>[] = []

  constructor(
    private schema: string,
    queryItems: T[]
  ) {
    this.items = queryItems.map(item => {
      return {
        schema,
        mutationArg: item,
        mutationType: DATA_STATE.query
      }
    })
  }

  listAll() {
    return this.items.filter(item => item.mutationType !== DATA_STATE.delete).map(item => item.mutationArg)
  }

  changeSet() {
    return this.items.filter(item => item.mutationType !== DATA_STATE.query) as GraphqlMutationRequest<T>[]
  }

  async add(item: Omit<T, "UID">) {
    const newItem = {
      ...item,
      UID: uniqueId(this.schema)
    } as T & {
      UID: string
    }

    this.items.push({
      schema: this.schema,
      mutationArg: newItem,
      mutationAlias: newItem.UID,
      mutationType: DATA_STATE.add
    })

    return newItem
  }

  update(item: T & {
    UID: string
  }) {
    // @ts-ignore
    const existItem = this.items.find(i => i.mutationType !== DATA_STATE.delete && i.mutationArg.UID === item.UID)
    return assign(existItem, {
      mutationArg: { ...item },
      mutationType: existItem?.mutationType !== DATA_STATE.add ? DATA_STATE.update : existItem?.mutationType
    })
  }

  delete(item: T) {
    // @ts-ignore
    const existItem = this.items.find(i => i.mutationType !== DATA_STATE.delete && i.mutationArg.UID === item.UID)
    if (existItem) {
      if (existItem.mutationType === DATA_STATE.add) {
        // @ts-ignore
        this.items = this.items.filter(i => i.mutationArg.UID !== item.UID)
      } else {
        existItem.mutationType = DATA_STATE.delete
      }
    }
  }
}
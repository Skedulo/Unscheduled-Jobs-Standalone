export interface SubscriptionData<Data, PreviousValue> {
  [schemaName: string]: {
    operation: "UPDATE" | "INSERT" | "DELETE"
    timestamp: string
    data: Data
    previous: PreviousValue
  }
}

export interface HasID {
  UID: string
}

export interface BaseObject extends HasID {
  Name: string
}

export type OmitTypeName<T> = Omit<T, '__typename'>

export interface Attachment {
  filePtr: string
  fileName: string
  parentId: string
  downloadUrl: string
}

export interface UserMetadata {
  id: string
  username: string
  fullName: string
  resource: {
    id: string
    category: string
    employeeType: string
    timezone: string
  }
}

export interface TableCellRendererItem<T, K extends keyof T> {
  cell: {
    value: T[K];
  };
  row: {
    original: T;
  };
}

export interface GraphqlListResponse<T> {
  totalCount: number
  edges: Array<{
    cursor: string
    node: T
  }>
  pageInfo: {
    hasNextPage: boolean
  }
}

export interface OrderParams {
  orderBy: string
  orderType: 'DESC' | 'ASC'
}

export interface Vocabulary {
  [schema: string]: {
    [field: string]: VocabularyField[]
  }
}

export interface VocabularyField {
  controllingField: string
  label: string
  controller: string
  defaultValue: boolean
  value: string
  validFor: string[]
  active: boolean
}

export interface TransformedListResponse<T> {
  data: T[]
  hasNextPage?: boolean
  totalCount: number
}

export interface OrderParams {
  orderBy: string
  orderType: 'DESC' | 'ASC'
}

export interface GraphqlVariables {
  filter: string
  orderBy?: string
  offset?: number
  first?: number
  rawParams?: Record<string, any>
}

export interface AddressPrediction {
  description: string
  placeId: string
}

export interface AutocompleteResult {
  predictions: AddressPrediction[]
  status: string
  errorMessage?: string | null
}

export interface PlaceDetail {
  addressComponents: {
    streetNumber: string
    route: string
    locality: string
    area2: string
    area1: string
    country: string
    postalCode: string
  }
  formattedAddress: string
  geometry: {
    lat: number
    lng: number
  }
}

export interface GraphqlMutationRequest<T> {
  schema: string;
  mutationArg: T;
  mutationAlias?: string;
  mutationType: DATA_STATE;
}


export enum DATA_STATE {
  add = "insert",
  update = "update",
  delete = "delete",
  query = "query"
}

export interface GraphQLRequest {
  query: string
  variables?: Record<string, any>
  operationName?: string
  context?: Record<string, any>
  extensions?: Record<string, any>
}
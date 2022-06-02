export interface AppState {
  main: any,
  common: any,
  saveFn: any,
  view: string,
  selectedItem?: any,

  timezone?: string,
  timestamp?: any

  showLoading: boolean,
  widgets?: any,
  deviceCache?: any
  liveDataService?: any
}

export interface AppAction {
  type: string,
  params: any
}

export interface StoreState {
  reducer: AppState
}
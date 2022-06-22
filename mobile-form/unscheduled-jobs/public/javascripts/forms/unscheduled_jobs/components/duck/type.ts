export enum ACTION {
  "SET-VIEW" = "SET-VIEW",
  "SET-NOTIFICATION" = "SET-NOTIFICATION",
  "SET-RESOURCE" = "SET-RESOURCE",
  "ON-CLAIM-JOB-OFFER" = "ON-CLAIM-JOB-OFFER",
  "SET-ITEM-CLAIMING" = "SET-ITEM-CLAIMING",
  "SET-JOB-IDS-HIDDEN" = "SET-JOB-IDS-HIDDEN",
  "SET-JOB-IDS-PEDDING_APPROVE" = "SET-JOB-IDS-PEDDING_APPROVE",
  "SET-JOB-IDS-APPROVAL" = "SET-JOB-IDS-APPROVAL",
  "INIT-DATA" = "INIT-DATA"
}

export enum VIEW {
  "HOME" = "HOME",
  "KITCHEN-SINK" = "KITCHEN-SINK"
}

export enum NOTIFICATION_TYPE {
  "SUCCESS" = "success",
  "WARNING" = "warning"
}

export enum CLAIM_STATUS {
  "SUCCESS" = "SUCCESS",
  "FAIL" = "FAIL",
  "LOADING" = "LOADING"
}


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
  title: string,
  jobs: Job[],
  isEnable: boolean,
  isEnableSuggest: boolean
}

export interface AppAction {
  type: string,
  params: any
}

export interface StoreState {
  reducer: AppState
}
export interface INotification {
  type: NOTIFICATION_TYPE | null
  text: string
}

export interface IJobIdStorage{
  [key: string]: boolean
}

export interface State {
  main: {},
  common: {},
  view: VIEW
  loading: boolean
  itemsClaiming: any
  notification: {
    type: string | null,
    text: string
  }
  resource: ResourceApiType,
  jobIdsHidden: IJobIdStorage,
  jobIdsPendingApprove: IJobIdStorage,
  jobIdsApproval: IJobIdStorage,
  advertiseJobs: JobApiType[],
  jobOfferConvertedType: JobOfferApiType[],
  saveFn: any
}

export interface Action {
  type: ACTION
  payload: unknown
}

export interface Reducer {
  reducer: State
}

//--
export interface Resource {
  UID: string,
  Name: string,
  GeoLatitude: number,
  GeoLongitude: number,
  PrimaryRegionId: string,
  ResourceTags? : [],
}

export interface ResourceApiType {
  Id: string,
  Name: string,
  sked__GeoLocation__c: {
    latitude: number,
    longitude: number
  }
  sked__Primary_Region__c: string
}

export interface IActivity {
  Id: string,
  sked__Start__c: string
  sked__End__c : string
  sked__Resource__c: string
}

export interface Job {
  UID: string,
  Name: string,
  Start: string,
  End: string
  Duration: number
  Type: string
  Location: {
    Name: string
  }
  Description: string
  Region: {
    Name: string
    UID: string
  }
  RegionId: string
  JobStatus: string
  Urgency: string
  Timezone: string
  Address: string
  JobAllocations: {
    ResourceId: string
    UID: string
  }[]
  JobTimeConstraints: {
    StartAfter: string
    StartBefore: string
    EndBefore: string
    Type: string
  }
  Contact: {
    FullName: string
  }
  CreatedDate: string
}

export interface JobApiType {
  Id: string,
  Name: string,
  sked__Start__c: string,
  sked__Finish__c: string,
  sked_Advertise_Start__c: string,
  sked_Advertise_End__c: string,
  sked__Duration__c: number,
  sked__Type__c: string,
  sked__GeoLocation__c: {
    latitude: number,
    longitude: number,
  },
  sked_Published_Date__c: string,
  sked_Advertise__c: boolean,
  sked_Publish_Status__c: string,
  sked_Respect_Schedule__c: boolean,
  sked_Job_Claim_Approval_Required__c: boolean,
  sked_Suburb__c: string,
  sked__Account__c?: string,
  sked__Description__c: string, 
  sked__Region__c?: string,
  sked__Job_Status__c: string,
  sked__Urgency__c: string,
  sked__Timezone__c: string,
  JobTag?: JobTag | null,
  Distance?: number | null,
  Account?: Account
}

export interface JobOffer {
  UID: string,
  JobId: string,
  Job: Job,
  ResourceJobOffers: ResourceJobOffer[]
}

export interface JobOfferApiType {
  Id: string
  sked__Job__c: string,
  Job: JobApiType
  ResourceJobOffer?: ResourceJobOfferApiType
}

export interface ResourceJobOffer {
  UID: string
  JobOfferId: string;
  ResourceId: string;
  Status: string;
}

export interface ResourceJobOfferApiType {
  Id: string
  sked__Job_Offer__c: string;
  sked__Resource__c: string;
  sked__Status__c: string;
}

export interface Account {
  Name: string,
  Id: string,
}

export interface JobTag {
  Id: string
  Name: string,
  sked__Tag__c: string,
  sked__Job__c: string,
}
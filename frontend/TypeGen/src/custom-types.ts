import { RawOperationToPrimitive } from '@skedulo/sdk-utilities'
import { FetchJobsWithJobProducts, FetchProducts, FetchEduMeSettings, FetchResources, FetchErrorLogs } from './__graphql/graphql'

/**
 * All exports of the type generation utility projects should be dealt with here.
 * In this use case, we're creating a simple store for managing Job Products by converting
 * some of the GraphQL types that are generated from the queries defined in this project.
 * 
 * First start by defining the building blocks for the store.  Using the RawOperationToPrimitive
 * converter type will sanitize generated types in to flat records making it easier to work with.
 * 
 * Then define and export the store based on those types.
 */

export type Product = RawOperationToPrimitive<FetchProducts.Node>
export type Job = RawOperationToPrimitive<FetchJobsWithJobProducts.Node>
export type CustomJobProducts = RawOperationToPrimitive<FetchJobsWithJobProducts.JobProducts>

export type EduMeSettings = RawOperationToPrimitive<FetchEduMeSettings.Node>
export type Resource = RawOperationToPrimitive<FetchResources.Node>
export type User = RawOperationToPrimitive<FetchResources.User>

export type ErrorLogs = RawOperationToPrimitive<FetchErrorLogs.Node>
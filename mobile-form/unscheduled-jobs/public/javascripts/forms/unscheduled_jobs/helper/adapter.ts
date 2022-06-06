import { Job, JobApiType, JobOffer, JobOfferApiType, Resource, ResourceApiType } from "../duck/type";

export function convertJobProperties(jobs: Job[]): JobApiType[] {
  const jobApiTypes: JobApiType[] = [];

  jobs.forEach((job: Job ) => {
    const jobApiType: JobApiType = {
      Id: job.UID,
      Name: job.Name,
      sked_Advertise_End__c: job.AdvertiseEnd,
      sked_Advertise_Start__c: job.AdvertiseStart,
      sked_Advertise__c: job.Advertise,
      sked_Job_Claim_Approval_Required__c: job.JobClaimApprovalRequired,
      sked_Publish_Status__c: job.PublishStatus,
      sked_Published_Date__c: job.PublishedDate,
      sked_Respect_Schedule__c: job.RespectSchedule,
      sked_Suburb__c: job.Suburb,
      sked__Description__c: job.Description,
      sked__Duration__c: job.Duration,
      sked__Finish__c: job.End,
      sked__Job_Status__c: job.JobStatus,
      sked__Start__c: job.Start,
      sked__Type__c: job.Type,
      sked__Urgency__c: job.Urgency,
      sked__GeoLocation__c: {
        latitude: job.GeoLatitude,
        longitude: job.GeoLongitude
      },
      sked__Timezone__c: job.Timezone,
      Account: {
        Id: job.Account?.UID,
        Name: job.Account?.Name
      }
    };

    jobApiTypes.push(jobApiType)
  })

  return jobApiTypes;
}

export function convertJobOfferProperties(jobOffers: JobOffer[]): JobOfferApiType[] {
  const jobOfferApiTypes: JobOfferApiType[] = [];
  
  jobOffers.forEach((jo: JobOffer) => {
    const jobOfferApiType: JobOfferApiType = {
      Id: jo.UID,
      sked__Job__c: jo.JobId,
      Job: {
        Id: jo.Job.UID,
        Name: jo.Job.Name,
        sked_Advertise_End__c: jo.Job.AdvertiseEnd,
        sked_Advertise_Start__c: jo.Job.AdvertiseStart,
        sked_Advertise__c: jo.Job.Advertise,
        sked_Job_Claim_Approval_Required__c: jo.Job.JobClaimApprovalRequired,
        sked_Publish_Status__c: jo.Job.PublishStatus,
        sked_Published_Date__c: jo.Job.PublishedDate,
        sked_Respect_Schedule__c: jo.Job.RespectSchedule,
        sked_Suburb__c: jo.Job.Suburb,
        sked__Description__c: jo.Job.Description,
        sked__Duration__c: jo.Job.Duration,
        sked__Finish__c: jo.Job.End,
        sked__Job_Status__c: jo.Job.JobStatus,
        sked__Start__c: jo.Job.Start,
        sked__Type__c: jo.Job.Type,
        sked__Urgency__c: jo.Job.Urgency,
        sked__GeoLocation__c: {
          latitude: jo.Job.GeoLatitude,
          longitude: jo.Job.GeoLongitude
        },
        sked__Timezone__c: jo.Job.Timezone,
        Account: {
          Id: jo.Job.Account?.UID,
          Name: jo.Job.Account?.Name
        }
      },
      ResourceJobOffer: {
        Id: jo.ResourceJobOffers[0].UID,
        sked__Job_Offer__c: jo.ResourceJobOffers[0].JobOfferId,
        sked__Resource__c: jo.ResourceJobOffers[0].ResourceId,
        sked__Status__c: jo.ResourceJobOffers[0].Status
      }
    }

    jobOfferApiTypes.push(jobOfferApiType);
  })

  return jobOfferApiTypes;
}

export function convertResourceProperties(resource: Resource): ResourceApiType {
  const resourceApiType: ResourceApiType = {
    Id: resource.UID,
    Name: resource.Name,
    sked__GeoLocation__c: {
      latitude: resource.GeoLatitude,
      longitude: resource.GeoLongitude,
    },
    sked__Primary_Region__c: resource.PrimaryRegionId,
  }

  return resourceApiType;
}
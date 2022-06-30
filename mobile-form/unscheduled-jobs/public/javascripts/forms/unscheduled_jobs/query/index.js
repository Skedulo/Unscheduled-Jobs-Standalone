export const queryJob = `
  query job($filterJob: EQLQueryFilterJobs, $orderBy: EQLOrderByClauseJobs, $first: PositiveIntMax200 ) {
    jobs(filter: $filterJob, orderBy: $orderBy, first: $first) {
      edges {
        node {
          UID
          Name
          Start
          End
          Duration
          Type
          JobStatus
          Address
					Description
          Region {
            Name
            UID
          }
          GeoLatitude
          GeoLongitude
          RegionId
          Urgency
          Timezone
          JobAllocations{
            UID
            ResourceId
            JobId
            Status
          }
          JobTimeConstraints {
            StartAfter
            StartBefore
            EndBefore
            Type
          }
          Contact{
            FullName
          }
          CreatedDate
          Locked
        }
      }
    }
  }
`;

export const queryResourceInfor = `
  query getResources($filterResource: EQLQueryFilterResources) {
    resources(filter: $filterResource) {
      edges {
        node {
          UID
          Name
          PrimaryRegionId
          GeoLatitude
          GeoLongitude  
          PrimaryRegion {
            Name
          }
          ResourceTags {
            TagId
            Tag {
              Name
            }
          }
          User {
            Name
            Email
            UID
          }
        }
      }
    }
  }
`;

export const queryActivities = `
  query activites($filterActivities: EQLQueryFilterActivities) {
    activities(filter: $filterActivities) {
      edges {
        node {
          UID
          ResourceId
          Start
          End
        }
      }
    }
  }
`;

export const queryJobAllocations = `
  query jobAllocations($filterJA: EQLQueryFilterJobAllocations) {
    jobAllocations(filter: $filterJA) {
      edges {
        node {
          UID
          Status
          Start
          End
        }
      }
    }
  }
`;

export const queryAvailabilities = `
  query availabilitiy($filterAvailabilities: EQLQueryFilterAvailabilities) {
    availabilities(filter: $filterAvailabilities) {
      edges {
        node {
          UID
          ResourceId
          Type
          Start
          Status
          Finish
          IsAvailable
        }
      }
    }
  }
`;

export const queryAvailabilitiesTemplate = `
  query availabilityTemplates {
    availabilityTemplates {
      edges {
        node {
          UID
          AvailabilityTemplateEntries {
            StartTime
            FinishTime
            Weekday
            IsAvailable
          }
          Resources {
            ResourceId
            Resource {
              Name
            }
          }
          Start
          Finish
        }
      }
    }
  }
`;

export const createJobOffer = `
mutation createJobOffer($jobOffer: NewJobOffers!) {
  schema {
    insertJobOffers(input: $jobOffer)
  }
}
`;

export const updateStatusJobOffer = `
  mutation updateJobOffer($id: ID!) {
    schema {
      updateJobOffers(input: {
        UID: $id,
        Status: "Pending"
      })
    }
  }
`;

export const createResourceJobOffer = `
  mutation createResourceJobOffer($resourceId: ID!, $jobOfferId: ID!, $status: ResourceOfferStatus!, $response: OfferResponse) {
    schema {
      insertResourceJobOffers(input: {
        JobOfferId: $jobOfferId,
        ResourceId: $resourceId,
        Status: $status,
        Response: $response
      })
    }
  }
`;

export const createJobAllocation = `
  mutation createJobAllocation($jobId: ID!, $resourceId: ID!) {
    schema {
      insertJobAllocations(input: {
        JobId: $jobId,
        ResourceId: $resourceId,
        Status: "Confirmed"
      })
    }
  }
`;

export const queryJobOffers = `
query jobOffers($filterJobOffers: EQLQueryFilterJobOffers) {
  jobOffers(filter: $filterJobOffers) {
    edges {
      node {
        UID
        CreatedById
        JobId
        CreatedDate
        Job {
          Start
          Name
          UID
        }
      }
    }
  }
}`;

export const queryJobOffersOfResource = `
query jobOffers($filterByResourceId: EQLQueryFilterResourceJobOffers) {
  jobOffers {
    edges {
      node {
        UID
        CreatedById
        JobId
        CreatedDate
        Job {
          UID
          Name
          Start
          End
          AdvertiseStart
          AdvertiseEnd
          Duration
          Type
          GeoLatitude
          GeoLongitude
          PublishedDate
          Advertise
          PublishStatus
          RespectSchedule
          JobClaimApprovalRequired
          Location {
            Name
          }
          Suburb
          Account {
            Name
          }
					Description
          Region {
            Name
            UID
          }
          RegionId
          Type
          JobStatus
          JobTags {
            TagId
            Tag {
              Name
            }
          }
          Urgency
          Timezone
        }
        ResourceJobOffers(filter: $filterByResourceId) {
          ResourceId
          JobOfferId
          Status
          UID
        }
      }
    }
  }
}`;

export const queryResourceJobOffer = `
  query resourceJobOffer($filterRJO: EQLQueryFilterResourceJobOffers) {
    resourceJobOffers(filter: $filterRJO) {
      edges {
        node {
          UID
          ResourceId
        }
      }
    }
  }
`;

export const deleteJobOffer = `
  mutation deleteJobOffer($id: ID!) {
    schema {
      deleteJobOffers(UID: $id)
    }
  }
`;
export const deleteResourceJobOffer = `
  mutation deleteResourceJobOffer($id: ID!) {
    schema {
      deleteResourceJobOffers(UID: $id)
    }
  }`;

export const updateJobsMutation = `
  mutation updateJobs($input: UpdateJobs!) {
    schema {
      updateJobs(input: $input)
    }
  }
`;

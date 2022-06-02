export const userJobQuery = `
  query ($filterJob: EQLQueryFilterJobs) {
    jobs(filter: $filterJob) {
      edges {
        node {
          UID
          Name
        }
      }
    }
    
    users {
      edges {
        node {
          UID
          Name
        }
      }
    }
  }
`;

import { helper } from "@skedulo/custom-form-controls";
const { DataHelper } = helper;
import _ from "lodash";
import { buildAvailableTemplate } from "./helper/availableTemplateHelper";
import {updateJobsMutation} from '../unscheduled_jobs/query/index';

import {
  queryActivities,
  queryJob,
  queryJobAllocations,
  queryResourceInfor,
  queryAvailabilities,
  queryAvailabilitiesTemplate,
} from "./query";

if (!global || !global._babelPolyfill) {
  require("babel-polyfill");
}

export default wrapper;

function wrapper(httpLibs, utils) {
  const dataHelper = new DataHelper(httpLibs, utils);

  const graphiQl = dataHelper.getGraphiQlInstance();

  async function fetch(resourceIds) {
    // token to query online
    const authData = dataHelper.getSkeduloToken() ? dataHelper.getSkeduloToken() : {skeduloAccess: {
      instance: "http://prod-elasticserver.prod.svc.cluster.local",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTVlM2QtMTA1My00OTdiLTkwYjAtNTVjOTc1NzBjMGZhIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1NjkxNy1mNmMzLTQ5NjEtODdjZi1iZDY5Y2YzYjc4ZWEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU1OTk4MzA3LCJleHAiOjE2NTYwNDE1MDcsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.G-wJ-oimmR3JEryQnaW52tR3AJEZ0_JFVtoAj5L7opzcHjXfykIPON1bwDGgJrkd50ktByULEV8dU4kMQba035flV1NEhezjiM8J1mpIa9TNJc50Ou44CeOq7o5MmIjf4SgjyTyVAhlhFQtkN5GXDOuNgkR4RMw0LTp13CymFdN-bniUck_wNQl69O-nsdxDHouu1njNQrLT3C1BM2pdy3fv28FULvKFOdXh3L3ECKg3rYckgxAMUfMJmEm64ifbTQeXq5gZ4EAVQ-mnODdq_NrXwLL9wGOexmQM9vAllVo_eDqh3_W-WrWFu4MqXAX21d6RletfVWW3ZfeoerRuiA"
    }
    };

    // query
    const { resourceId } = await dataHelper.getUsermetadata();

    const { resources } = await graphiQl
      .query(queryResourceInfor, {
        filterResource: `UID == '${resourceIds[0]}'`,
      })
      .catch((e) => console.log("Fetch resources error: ", e));

    const { jobs } = await graphiQl
      .query(queryJob, {
        filterJob: `Start == null AND JobStatus != 'Cancelled' AND Locked == false`,
        orderBy: "CreatedDate DESC"
      })
      .catch((e) => console.log("Fetch job error: ", e));

    const { activities } = await graphiQl
      .query(queryActivities, {
        filterActivities: `ResourceId == '${resourceIds[0]}'`,
      })
      .catch((e) => console.log("Fetch activities error: ", e));

    const { jobAllocations } = await graphiQl
      .query(queryJobAllocations, {
        filterJA: `ResourceId == '${resourceIds[0]}'`,
      })
      .catch((e) => console.log("Fetch jobAllocations error: ", e));

    // create an array contains unavailability values
    const unAvailabilityTimes = [];

    activities.forEach((item) =>
      unAvailabilityTimes.push({ start: item.Start, end: item.End })
    );
    jobAllocations.forEach((item) =>
      unAvailabilityTimes.push({ start: item.Start, end: item.End })
    );

    const filteredJob = jobs.filter(function (element) {
      return element.JobAllocations.some( function (subElement) {
          return subElement.ResourceId === resourceId && subElement.Status !== "Deleted" && subElement.Status !== "Declined";
      });
  });
    return buildDataStruct({
      resourceIds,
      authData,
      resources,
      jobs: filteredJob.slice(0, 30),
    });
  }

  function buildDataStruct({
    resourceIds,
    authData,
    resources,
    jobs,
  }) {

    const retObj = resourceIds
      .map((resourceId) => {
        const obj = {
          resourceIds,
          resources,
          authData,
          jobs,
        };

        return { [resourceId]: obj };
      })
      .reduce((acc, e) => _.assign(acc, e), {});
    return {
      main: retObj,
      common: {
        authData,
      },
    };
  }

  async function fetchCache() {
    // return dataHelper.getPermissionsLayout("Accounts");
    return Promise.resolve({ text: "Hello world !!!" });
  }

  function save(data) {
    return saveBulk([data]);
  }
  function saveBulk(saveArray) {
    const cleaned = _.compact(saveArray);

    // const jobIds = _.uniq(_.flatten(cleaned.map(items => Object.keys(items))));
    const selectedItem = _.compact(
      _.flatten(
        _.flatten(cleaned.map((items) => _.values(items))).map((i) => i.selectedItem)
      )
    );
    const resourceIds = _.compact(
      _.flatten(
        _.flatten(cleaned.map((items) => _.values(items))).map(
          (i) => i.resourceIds
        )
      )
    );

    return saveItems(selectedItem, resourceIds);
  }

  async function saveItems(selectedItem, resourceIds) {
  await graphiQl.executeQuery(
    updateJobsMutation,
    {input: {
      UID: selectedItem[0].UID,
      Start: selectedItem[0].Start,
      End: selectedItem[0].End 
    }
    }
  );

    return fetch(resourceIds).then((result) => _.pick(result, "main"));
  }


  return { fetch, save, saveBulk, fetchCache };
}

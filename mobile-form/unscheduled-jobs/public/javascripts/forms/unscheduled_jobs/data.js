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
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTVlM2QtMTA1My00OTdiLTkwYjAtNTVjOTc1NzBjMGZhIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1NjkxNy1mNmMzLTQ5NjEtODdjZi1iZDY5Y2YzYjc4ZWEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU1MTcyNjc1LCJleHAiOjE2NTUyMTU4NzUsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.j4YpQiSJ-ls1x2XErW7T_HiuP0YfrLV7VIh691A9MqeEf0IE17eKwNQK1A2LYUJ3n4fjlTLq2HKqSYj6S_U2FH-4XWqSBFcQ9N33ENnbQGyghijD_5lFojhM-n15nd36iJCxLuccYc99UPvGaEwrFGI3FGeyEpTOo4_xkYq2pBdiwCBVPdpWRK6slBeRhBbWhgvzFZ60tT4l9MF78DaqOKHa2_j0lqENVMchHaMbN5uhNQY7l5U0HORm7frCqfAa7ckZJUqyBbTP8-vIgih0GVguw1Tmkcau-oSeV8IZDqZqqmg4j10z97RLhF6udYc-oIYMGSl86k0ojupvBn-l5g"
    }
    };
    console.log("🚀 ~ file: data.js ~ line 30 ~ fetch ~ authData", authData);

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

    const { availabilities: unavailabilities } = await graphiQl
      .query(queryAvailabilities, {
        filterAvailabilities: `ResourceId == '${resourceIds[0]}' AND
                                IsAvailable == false`,
      })
      .catch((e) => console.log("Fetch availabilities error: ", e));

    const { availabilityTemplates } = await graphiQl
      .query(queryAvailabilitiesTemplate)
      .catch((e) => console.log("Fetch Availabilities Template error: ", e));

    const availabilityTemplatesResources = availabilityTemplates.filter(
      (item) => {
        for (let i = 0; i < item.Resources.length; i++) {
          if (item.Resources[i].ResourceId === resourceIds[0]) return true;
        }
        return false;
      }
    );

    // create an array contains unavailability values
    const unAvailabilityTimes = [];

    activities.forEach((item) =>
      unAvailabilityTimes.push({ start: item.Start, end: item.End })
    );
    jobAllocations.forEach((item) =>
      unAvailabilityTimes.push({ start: item.Start, end: item.End })
    );
    unavailabilities.forEach((item) =>
      unAvailabilityTimes.push({ start: item.Start, end: item.Finish })
    );

    // filter jobs don't overlap any existing Unavailability (Activites, JobAllocations, Unavailabilities)
    const availabilityTemplateDays = buildAvailableTemplate(
      availabilityTemplatesResources
    );

    const filteredJob = jobs.filter(function (element) {
      return element.JobAllocations.some( function (subElement) {
          return subElement.ResourceId === resourceId && subElement.Status !== "Deleted" && subElement.Status !== "Declined"
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

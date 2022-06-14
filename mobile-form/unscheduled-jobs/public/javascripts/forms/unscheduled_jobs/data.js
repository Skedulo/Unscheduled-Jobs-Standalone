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
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8NjI5NTgxNmJjNzllOGUwMDY4NGM3YzNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdW5zY2hlZHVsZWRAc2tlZHVsby5jb20iLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9vcmdhbml6YXRpb25faWQiOiJza182Zjk3NWUzOTI2Y2Y0ZDg3OWE0YmE1YzA0MjAyNTk2NCIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL25hbWUiOiJleHBlcnRzZXJ2aWNlcyt1bnNjaGVkdWxlZEBza2VkdWxvLmNvbSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3Jlc291cmNlX2lkIjoiMDAwNTAwYzQtMThiMi00YzllLThmNTctNTVjMmQwMjZlYmVmIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcm9sZXMiOlsiYWRtaW5pc3RyYXRvciIsInNjaGVkdWxlciJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDFjNzE5LTdjMWQtNGRlYi05NWQzLTQ4YjhlOWE4ZWFkNSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyOTU4MTZiYzc5ZThlMDA2ODRjN2MzZSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU1MTY3OTc1LCJleHAiOjE2NTUyMTExNzUsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.HjAMLHRecyAy2ZmIWbmHPLE4OsgpJgdVvcSsVxIHSn8SsEtiGxObXOnHrfVT0Lus0ooIsgh2zzchNoUmyceJJubcwn4rN9LuAJpvhBUg-M0b04ygzIdqgsV84R1suC-MNQp3I7Lspy_WeOoUkEY2hXMIMLLLkd0zpbucFAxF9CTop733xijZw91eYuBTNpKawO6pEtjytT2nN2dVpZv7Mb2-440mfCYMOuTb7S9y1z7oGCvmzLNXocpbrMST6NE8d4CXFkuZEGRgAR0sSYg-c62_s6gWFep7dCV8SRAIvkK_P3jUjZ0ggUSq5QkOT2S7vxpeEZit25fRH7QeV79Z1Q"
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

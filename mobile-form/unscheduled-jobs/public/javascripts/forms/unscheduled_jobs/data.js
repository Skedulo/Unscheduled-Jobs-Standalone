import { helper } from "@skedulo/custom-form-controls";
const { DataHelper } = helper;
import _ from "lodash";
import { buildAvailableTemplate } from "./helper/availableTemplateHelper";

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
    const authData = dataHelper.getSkeduloToken();

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
    const job = _.compact(
      _.flatten(
        _.flatten(cleaned.map((items) => _.values(items))).map((i) => i.job)
      )
    );
    const resourceIds = _.compact(
      _.flatten(
        _.flatten(cleaned.map((items) => _.values(items))).map(
          (i) => i.resourceIds
        )
      )
    );

    return saveItems(job, resourceIds);
  }

  async function saveItems(job, resourceIds) {

    return fetch(resourceIds).then((result) => _.pick(result, "main"));
  }

  return { fetch, save, saveBulk, fetchCache };
}

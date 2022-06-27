import { helper } from "@skedulo/custom-form-controls";
const { DataHelper } = helper;
import _ from "lodash";
import {updateJobsMutation} from '../unscheduled_jobs/query/index';

import {
  queryActivities,
  queryJob,
  queryJobAllocations,
  queryResourceInfor,
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
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEwWXdOekF5UTBFME1UTXdRa05FTWpWQ05rRTVSRFUxTURoRk16TXhNa1kyTVRFelFVSkJRUSJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKYU9BQVciLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW5kb3IiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdXNlcm5hbWUiOiJ0aHVsZUBza2VkdWxvLmNvbSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL29yZ2FuaXphdGlvbl9pZCI6IjAwRDVqMDAwMDA1c014SEVBVSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL25hbWUiOiJUaHUgTGUiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9zZl9lbnYiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiJhMGk1ajAwMDAwMHo0eG9BQUEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsiY29tbXVuaXR5X2lkIjpudWxsLCJ1c2VyX2lkIjoiMDA1NWowMDAwMDVESmFPQUFXIn0sImlzcyI6Imh0dHBzOi8vc2tlZHVsby5hdXRoMC5jb20vIiwic3ViIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKYU9BQVciLCJhdWQiOlsiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20iLCJodHRwczovL3NrZWR1bG8uYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NjA0Mjc4MCwiZXhwIjoxNjU2MDg1OTgwLCJhenAiOiI5bUVKQzBxS0VaSW5UYThPMnVTMzBtZHdMVXlqNllySCIsInNjb3BlIjoib3BlbmlkIn0.uGH1C6Znj06q4h5DAlcwm7pOBipYd6UVlNYK5ECok43tIIRe2Qe_7d8wyuDZhPp9rfOD2L-SPVa6Ru_nDqG3Tcuuc3xXTYf0ew0X_kbw5fiXDMUPSf2DQa8Ud7XnOolic2p3IY-JfFXiC5xLdwH_tv__XMHRlTw1HY1xLtyyozwXr86NAjfVuGMargkFJHdaxaw_DZLBpeap8tae7p6NV-DiK1lxJEtFfjcd_6ngzPu45i1xI6_TcrpN-LI-BmWJh0Qq--XuzgRfKmahYTfXFTqxCgLx_jjDoXKQgYUim8sB6kX6gAmxhO1IjZODkk8Wg3w_en-LpRAH2OOC2pilhQ"
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

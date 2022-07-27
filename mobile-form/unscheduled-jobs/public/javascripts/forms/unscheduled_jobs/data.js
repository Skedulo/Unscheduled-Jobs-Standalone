import { helper } from "@skedulo/custom-form-controls";
const { DataHelper } = helper;
import _ from "lodash";
import { updateJobsMutation } from "../unscheduled_jobs/query/index";

import { queryResourceInfor } from "./query";

if (!global || !global._babelPolyfill) {
  require("babel-polyfill");
}

export default wrapper;

function wrapper(httpLibs, utils) {
  const dataHelper = new DataHelper(httpLibs, utils);

  const graphiQl = dataHelper.getGraphiQlInstance();

  async function fetch(resourceIds) {
    // token to query online
    const authData = dataHelper.getSkeduloToken()
      ? dataHelper.getSkeduloToken()
      : {
          skeduloAccess: {
            instance: "http://prod-elasticserver.prod.svc.cluster.local",
            token:
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTRmZjgtNjQ4Mi00ZDZiLWE1NTUtZjU5NTkwZTc5MTk2IiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAyQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAyQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1ZjllNy0yZjRkLTQxODItYmI5Mi1iOGJjZjdkM2ZkZGMiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE0ZmY4LTY0ODItNGQ2Yi1hNTU1LWY1OTU5MGU3OTE5NiJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE0ZmY4LTY0ODItNGQ2Yi1hNTU1LWY1OTU5MGU3OTE5NiIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU3ODUyNzIwLCJleHAiOjE2NTc4OTU5MjAsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.IBH117dnCXglNBYF1wq4dfS1ivvzvtx8DLyC1IwhOo3DEOc9eiTwpOJt8EEZKLADk1OePRDjXKyxFW1AqplSkmTJCTQ24zQMiGTpvrvXyRtq8oOCqE90zX1wG8BFf3GKlrO5B2I_mrwoxSoXsRkg3SJeqWSKMg5z1Vtdq3dKj14svIO-cVcoWBNUGXOM-JYwfHbNWVhv9usn4_lpTZ-RrYxT3V4dMXz8LW-r42TAx_hKvwGdTEyemgTSxySeUU3dUidJANoc2xVYM5wMla8UwsNXeYCiA1umlF0y6EKYQxBGUmUOnC-pOOZhnoqLL4NKMf8EGOF8ghpj8BSKJIrMMg",
          },
        };

    const { resources } = await graphiQl
      .query(queryResourceInfor, {
        filterResource: `UID == '${resourceIds[0]}'`,
      })
      .catch((e) => console.log("Fetch resources error: ", e));

    return buildDataStruct({
      resourceIds,
      authData,
      resources,
    });
  }

  function buildDataStruct({ resourceIds, authData, resources }) {
    const retObj = resourceIds
      .map((resourceId) => {
        const obj = {
          resourceIds,
          resources,
          authData,
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
        _.flatten(cleaned.map((items) => _.values(items))).map(
          (i) => i.selectedItem
        )
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
    await graphiQl.executeQuery(updateJobsMutation, {
      input: {
        UID: selectedItem[0].UID,
        Start: selectedItem[0].Start,
        End: selectedItem[0].End,
      },
    });

    return fetch(resourceIds).then((result) => _.pick(result, "main"));
  }

  return { fetch, save, saveBulk, fetchCache };
}

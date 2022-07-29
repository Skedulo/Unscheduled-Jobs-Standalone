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
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEwWXdOekF5UTBFME1UTXdRa05FTWpWQ05rRTVSRFUxTURoRk16TXhNa1kyTVRFelFVSkJRUSJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKWmtBQU8iLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW5kb3IiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdXNlcm5hbWUiOiJhbmhob2FuZ0Bza2VkdWxvLmNvbSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL29yZ2FuaXphdGlvbl9pZCI6IjAwRDVqMDAwMDA1c014SEVBVSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL25hbWUiOiJBbmggSG9hbmciLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9zZl9lbnYiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiJhMGk1ajAwMDAwMHo0eGpBQUEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsiY29tbXVuaXR5X2lkIjpudWxsLCJ1c2VyX2lkIjoiMDA1NWowMDAwMDVESlprQUFPIn0sImlzcyI6Imh0dHBzOi8vc2tlZHVsby5hdXRoMC5jb20vIiwic3ViIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKWmtBQU8iLCJhdWQiOlsiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20iLCJodHRwczovL3NrZWR1bG8uYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODk3NDQ0NiwiZXhwIjoxNjU5MDE3NjQ2LCJhenAiOiI5bUVKQzBxS0VaSW5UYThPMnVTMzBtZHdMVXlqNllySCIsInNjb3BlIjoib3BlbmlkIn0.A5xCpMBye6wdpuScACSTOfKlH36OCUbZa3ut80gqTJq2zno4LifSccUz0mKA4Q0YRhA9c9X8cSnh2unbHJUu5MxTQ3tLd_6_a3mnW4a8cJ0F9wIiEvQBwYXiUWHg-0079fmw9iSVH3lFmXqla6e1huxdE5GNtBUDUifcN2lT7Zjf0kKpL-qpM7FVOLd6SbfuVq1forTgT0J9n9vVdQ1RU2LmMmeHvzv2DumPldUbZRpg62A_HhDVniSUoMNjvSsvvmGVNH6wy0R7NRlXy8_PR_25ieyXUta27sF68K-L6teOpkomMqSdCniyetlGEkMoo9mFaVmnHlz8sfpemUS8_Q",
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

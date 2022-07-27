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
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEwWXdOekF5UTBFME1UTXdRa05FTWpWQ05rRTVSRFUxTURoRk16TXhNa1kyTVRFelFVSkJRUSJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKWmtBQU8iLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW5kb3IiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdXNlcm5hbWUiOiJhbmhob2FuZ0Bza2VkdWxvLmNvbSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL29yZ2FuaXphdGlvbl9pZCI6IjAwRDVqMDAwMDA1c014SEVBVSIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL25hbWUiOiJBbmggSG9hbmciLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9zZl9lbnYiOiJzYWxlc2ZvcmNlIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiJhMGk1ajAwMDAwMHo0eGpBQUEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsiY29tbXVuaXR5X2lkIjpudWxsLCJ1c2VyX2lkIjoiMDA1NWowMDAwMDVESlprQUFPIn0sImlzcyI6Imh0dHBzOi8vc2tlZHVsby5hdXRoMC5jb20vIiwic3ViIjoic2FsZXNmb3JjZXwwMDU1ajAwMDAwNURKWmtBQU8iLCJhdWQiOlsiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20iLCJodHRwczovL3NrZWR1bG8uYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODkxMzk2MiwiZXhwIjoxNjU4OTU3MTYyLCJhenAiOiI5bUVKQzBxS0VaSW5UYThPMnVTMzBtZHdMVXlqNllySCIsInNjb3BlIjoib3BlbmlkIn0.M1mDh839lHPvKIt9dhB8CO9hQ3lUkcviK-m_gFgZUSa_MCGlNU5pmz2xK3WfKJOnh7zx1Ml24_-TBlzfFAj4o0guU-YL1X78b0cH5xfxuXToF3H8y8_OSB8o84jtDha7ZmvAuss_UBPl7NZJFBDC4jB2INlFYFvAWRB3-7V83rECkUXMf8xdO3NQjfQbvVUsN1vuCJcEEFLp_yJmtQNyk4VqUxw4gIqk_AIzK-kv6qwejKwoFoLOsp4nsUitb2_m2P-cGM3t2mQMbJi2-RkKp4uDuXTwq3RDutEE2wgTBJKmR1FEVuNNMgAfz4p8V7LEHX_l09TzrUbsr9k7VIIIhA",
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

import { helper } from '@skedulo/custom-form-controls';
const { DataHelper } = helper;

import _ from "lodash";

// import {userJobQuery} from "./query"

if (!global || !global._babelPolyfill) {
  require('babel-polyfill');
}

export default wrapper;

function wrapper(httpLibs, utils) {

  const dataHelper = new DataHelper(httpLibs, utils);
  // const graphiQl = dataHelper.getGraphiQlInstance();

  async function fetch(jobIds) {
    // grapth ql
    // const {jobs, users} = await graphiQl.query(userJobQuery , {"filterJob": `UID IN [${jobIds.map(jobId => "\"" + jobId + "\"")}]`}).catch(e => console.log(e));

    // token to query online
    const authData = dataHelper.getSkeduloToken();

    // query
    const jobs = await dataHelper.fetchData('Jobs', `UID IN $1`, [jobIds]);
    return buildDataStruct({ jobIds, jobs: _.keyBy(jobs, "UID"), authData });
  }

  function buildDataStruct({ jobIds, jobs, authData }) {

    const retObj = jobIds
      .map(jobId => {

        const obj = {
          jobId, job: jobs[jobId] || {},
          authData
        };

        return { [jobId]: obj };
      })
      .reduce((acc, e) => _.assign(acc, e), {});

    return {
      main: retObj,
      common: {}
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

    const jobIds = _.uniq(_.flatten(cleaned.map(items => Object.keys(items))));
    //const jobItems = _.compact(_.flatten(_.flatten(cleaned.map(items => _.values(items))).map(i => i.jobs)))

    return saveItems(jobIds);
  }

  function saveItems(jobIds) {
    return fetch(jobIds)
      .then(result => _.pick(result, 'main'));
  }

  // function saveItems1(jobIds, changSetObj) {
  //   return graphiQl.executeBulkMutation(graphiQl.mutationFactory('Jobs', changSetObj))
  //     .then(() => fetch(jobIds))
  //     .then(result => _.pick(result, 'main'));
  // }

  return { fetch, save, saveBulk, fetchCache };

}


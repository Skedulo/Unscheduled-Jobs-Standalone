"use strict";

const _ = require('lodash')
const utils = require('utils-node')

const { forms } = require('../../public/definition.json')

//  This context runs inside a nodeJS environment
// `dataLibs` are fed in directly into this running context.
//  This lets us run the "data" prefetch section of the code
//  independently within the NodeJS environment.

// Implicit params attached to window
// @param jobIds<string[]> : An array of jobid's to prefetch against
// @param httpLibs<{libs}> : An object containing wrapped Sked HTTP Libs. i.e `Request`, `APIRequest` and `Query`
// @param action<number> 1 or 2   : Action to run. Either Fetch or Save
// @param done(err, data)<function>   : Completion callback to call with the final dataset (prefetch content)

runInNode(forms, jobIds, httpLibs, action, done)

// This context runs in NodeJS ( for data prefetching )
function runInNode(forms, data, httpLibs, action, done) {

  let dataPromises

  switch (action) {
    case 0: // This is the fetch case
      // If job id's are invalid, go back!
      const jobIds = data
      
      if (!jobIds || !_.isArray(jobIds) || jobIds.length == 0) {
        return done(new Error("Please specify an array of jobIds ( jobIds:id[] = [`<jobId>`] )"))
      }

      dataPromises = forms.map(item => {
        // In this context, data should be an array of jobIds
        const { fetch } = require("javascripts/forms/" + item.root + "data.js").default(httpLibs, utils)
        return fetch(jobIds).then(res => ({ [item.name]: res }))
      })

      break;

    case 1: // This is the save case
      // If saveObj is invalid, go back!
      const saveObj = data

      if (!saveObj || !_.isObject(saveObj) || Object.keys(saveObj) == 0) {
        return done(new Error("No content specified for save action"))
      }

      dataPromises = forms.map(item => {
        const { save } = require("javascripts/forms/" + item.root + "data.js").default(httpLibs, utils)
        return save(saveObj[item.name]).then(res => ({ [item.name]: res }))
      })

      break;

    case 2: // This is the save bulk case
      const saveArrayObj = data

      if (!saveArrayObj || !_.isArray(saveArrayObj) || saveArrayObj.length == 0) {
        return done(new Error("No content specified for save action"))
      }

      dataPromises = forms.map(item => {
        
        const items = _.compact(_.flatten(_.map(saveArrayObj, item.name)))

        if(!items || !items.length) {
          return Promise.resolve({[item.name]: { main: {}}})
        }

        const { saveBulk } = require("javascripts/forms/" + item.root + "data.js").default(httpLibs, utils)
        return saveBulk(items).then(res => ({ [item.name]: res }))
      })

      break;
    
    case 3: // This is the fetch cache case
      dataPromises = forms.map(item => {
        // In this context, data should be an array of jobIds
        const { fetchCache } = require("javascripts/forms/" + item.root + "data.js").default(httpLibs, utils)

        if (fetchCache) {
          return fetchCache().then(res => ({ [item.name]: res }))
        } else {
          return Promise.resolve({ [item.name]: {} })
        }
      })

      break;

    default:
      return done(new Error("Invalid action specified. Please contact your administrator"))
  }

  return Promise.all(dataPromises)
    .then(res => res.reduce((prev, next) => _.assign(prev, next), {}))
    .then(data => done(null, data))
    .catch(done)
}


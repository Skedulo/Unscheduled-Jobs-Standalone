"use strict";

/**
 * Skedulo
 * @author Harish Subramanium
 * Start Core Bootstrap
 */

// Babel polyfill for iOS and Android environments
require("babel-polyfill")

const _ = require('lodash')

const { forms } = require('../../public/definition.json')
const { dataForJobId, setupBrowserDefaults } = require('./browser-utils')

// @param jobId<string> : Relevant JobId
// @param formIndex<number> : Index of the form from the form package
// @param formData<{key: any}> : Relevant Form Data
// @param callbackSave(saveObj)<function>   : Completion callback to call with the final save changeset
// @param callbackClose()<function>  : Callback to close the form ( or go back )
// @param callbackLoaded()<function> : Callback that's called when the form has finished loading

// Navigation back function for Native forms
window.navGoBack = window.callbackClose;

runInNative(forms, jobId, formIndex, formData, callbackSave, callbackLoaded, cacheData);

// This context runs in Xamarin
function runInNative(forms, jobId, formIndex, formData, callbackSave, callbackLoaded, cacheData) {

  setupBrowserDefaults()

  const activeForm = forms[formIndex]
  const data = formData[activeForm.name]
  const cache = cacheData[activeForm.name]

  const formFn = require('javascripts/forms/' + activeForm.root + 'view.js').default
  const saveFn = (diff, updatedData, preventDefault = false, markCompleted = true) => {

    const saveObj = {
      [activeForm.name]: {
        [jobId]: diff
      }
    }

    const storeObj = {
      [activeForm.name]: {
        main: {
          [jobId]: updatedData
        }
      }
    }

    callbackSave(saveObj, storeObj, preventDefault, markCompleted)
  }

  return formFn(jobId, saveFn, _.mapValues(widgets, widget => widget.open ? widget.open : widget), callbackLoaded)(dataForJobId(data, jobId), cache)
}
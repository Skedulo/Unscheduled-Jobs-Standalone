"use strict";

/**
 * Skedulo
 * @author Harish Subramanium
 * Start Core Bootstrap
 */

// Babel polyfill for iOS and Android environments
require("babel-polyfill")

// navGoBack function for the browser
window.navGoBack = function () {
  window.parent.history.back()
}

// Set this class to load different styles on the HTML5 App
const html = document.getElementsByTagName('html')[0]
html.className += ' hybrid-app'

const _ = require('lodash')
const axios = require('axios')
const jwtDecode = require('jwt-decode')

const { forms } = require('../../public/definition.json')
const { dataForJobId, setupBrowserDefaults, resetCachedConfig, initCachedConfig, setOfflineConfig, registerConfigCLICommands } = require('./browser-utils')

// Start Browser App
runInBrowser(forms)

// This context runs within a browser (HTML5) 
function runInBrowser(forms) {

  setupBrowserDefaults()

  // if (__WEBPACK_LIVE__) {
  //   // Load webpack-dev-server if in dev-mode
  //   var script = document.createElement('script');
  //   script.src = "/webpack-dev-server.js"
  //   document.write(script.outerHTML);
  // }

  const cachedConfig = initCachedConfig()
  if (cachedConfig.OfflineToggle == "true") console.info(">>> Form is running offline <<<")
  else console.info(">>> Form is running online <<<")

  registerConfigCLICommands(cachedConfig)

  // HTTP Libs
  const { Query, Request, APIRequest, LayoutService } = require('../../public/node_modules/@skedulo/uranium')

  const http = Request("")
  const httpAPI = APIRequest("/api")
  const getVendorAccess = async () => {
    if (!window.GetIdToken()) {
      throw new Error("No IdToken available")
    }

    const decodedJwt = jwtDecode(__AUTH_API_TOKEN__)
    const vendorDelegationInfo = {
      clientId: decodedJwt.azp,
      target: decodedJwt['https://api.skedulo.com/sf_env'],
      idToken: window.GetIdToken() || ''
    }

    const vendorData = await http.post('/auth/delegate', vendorDelegationInfo)
    const vendorInformation = vendorData.data.result

    return { token: vendorInformation.access_token, instance: vendorInformation.instance_url }
  }

  const getLayoutService = () => getVendorAccess().then(access => {
    const vendorApi = Request(access.instance, { headers: { Authorization: `Bearer ${access.token}` } })

    return new LayoutService(vendorApi, http)
  })

  const getRequestModule = (baseURL, options) => Request(baseURL, options)

  const httpLibs = { Query, http, httpAPI, getVendorAccess, getLayoutService, getRequestModule }

  const utils = require('utils-browser')

  const location = window.parent.location
  const parts = location.hash.split("#").pop().split("/")


  if (parts.length < 2) {
    throw new Error("Invalid Form")
  }

  const formId = parts.pop()
  const jobId = parts.pop()

  const activeForm = forms[formId]

  const { fetch, fetchCache, save, saveBulk } = require('javascripts/forms/' + activeForm.root + 'data.js').default(httpLibs, utils)
  const formFn = require('javascripts/forms/' + activeForm.root + 'view.js').default

  window.TestCondenser = () => {
    if (cachedConfig.condenserUrl == "default") {
      http.request({
        method: 'get',
        url: '/condenser/pig',
      })
        .then(res => {
          console.info("Oink! Connection to condenser established")
        })
        .catch(e => {
          console.error("Failed to connect to condenser, are you sure it's set up properly?")
        })

    } else {
      axios({
        method: 'get',
        url: cachedConfig.condenserUrl + '/condenser/pig',
      })
        .then(res => {
          console.info("Oink! Connection to condenser established")
        })
        .catch(e => {
          console.error("Failed to connect to condenser, are you sure it's set up properly?")
        })
    }
  }

  const onloadSaveFn = () => {

    alert("Cached SaveArray will be saved before form is loaded")

    const savePromise = runSaveFunction(cachedConfig, http, saveBulk)
    return savePromise
      .then(res => {

        // Overwrite cached main data with new main data from save
        const mainData = JSON.parse(cachedConfig.mainData)
        mainData[jobId] = res.main[jobId]
        cachedConfig.mainData = JSON.stringify(mainData)

        // Set debug data for comparison of stored data to fetched data
        const debugMainData = JSON.parse(cachedConfig.debugMainData)
        debugMainData[jobId] = res.main[jobId]
        cachedConfig.debugMainData = JSON.stringify(debugMainData)

        // Reset saveArray
        cachedConfig.saveArray = "[]"
        setOfflineConfig(cachedConfig)
        location.reload()

      })
      .catch(e => {

        // Reset saveArray
        cachedConfig.saveArray = "[]"
        setOfflineConfig(cachedConfig)

        return Promise.reject(e)
      })
  }

  const fetchFn = (jobIds) => {

    dispatchEvent(LifeCycleEvents.Fetching, jobIds)
    dispatchEvent(LifeCycleEvents.HTTPStart)

    const fetchPromise = runFetchFunction(jobIds, activeForm, cachedConfig, http, fetch, fetchCache)

    /**
     * Not using .finally here since we're using basic promises offered by ES6
     * and not a fully featured Promise library. This allows us to keep the 
     * payload size small to improve performance and load times of the final bundle
     */
    return fetchPromise
      .then(data => {
        dispatchEvent(LifeCycleEvents.Fetched, data)
        dispatchEvent(LifeCycleEvents.HTTPEnd)
        return data
      })
      .catch(e => {
        dispatchEvent(LifeCycleEvents.HTTPError, e)
        dispatchEvent(LifeCycleEvents.HTTPEnd)
        return Promise.reject(e)
      })
  }

  const saveFn = (diff, updatedData = null, preventDefault = false) => {

    dispatchEvent(LifeCycleEvents.Saving, diff)
    dispatchEvent(LifeCycleEvents.HTTPStart)

    if (cachedConfig.OfflineToggle == "false") {

      // Push new save diff to cached saveArray
      const saveArray = JSON.parse(cachedConfig.saveArray)
      if (cachedConfig.FreezeSave != "true") saveArray.push({ [jobId]: diff })
      cachedConfig.saveArray = JSON.stringify(saveArray)

      const savePromise = runSaveFunction(cachedConfig, activeForm.name, http, saveBulk)

      return savePromise
        .then(res => {
          dispatchEvent(LifeCycleEvents.Saved, { data: updatedData, saveRes: res, preventDefault })
          dispatchEvent(LifeCycleEvents.HTTPEnd)

          // Overwrite cached main data with new main data from save
          const mainData = JSON.parse(cachedConfig.mainData)
          mainData[jobId] = res.main[jobId]
          cachedConfig.mainData = JSON.stringify(mainData)

          // Set debug data for comparison of stored data to fetched data
          const debugMainData = JSON.parse(cachedConfig.debugMainData)
          debugMainData[jobId] = updatedData
          cachedConfig.debugMainData = JSON.stringify(debugMainData)

          // Reset saveArray
          cachedConfig.saveArray = "[]"

          if (cachedConfig.FreezeSave == "true") {
            alert("Save Successful: SaveArray unfrozen and cleared")
            cachedConfig.FreezeSave = "false"
          }
          setOfflineConfig(cachedConfig)

          // Refresh only in effect while dev enabled
          if (__WEBPACK_LIVE__) {
            if (!preventDefault && cachedConfig.BlockRefreshToggle == "false") location.reload()
          }

        })
        .catch(e => {
          dispatchEvent(LifeCycleEvents.HTTPError, e)
          dispatchEvent(LifeCycleEvents.HTTPEnd)

          // Reset saveArray on error unless retain flag set
          if (cachedConfig.FreezeSave == "true") console.error("Frozen SaveArray: ", JSON.parse(cachedConfig.saveArray))
          else cachedConfig.saveArray = "[]"
          setOfflineConfig(cachedConfig)

          return Promise.reject(e)
        })

    } else {

      // Push new save diff to cached saveArray
      const saveArray = JSON.parse(cachedConfig.saveArray)
      if (cachedConfig.FreezeSave != "true") saveArray.push({ [jobId]: diff })
      cachedConfig.saveArray = JSON.stringify(saveArray)

      // Overwrite cached main data with new main data from save
      const mainData = JSON.parse(cachedConfig.mainData)
      mainData[jobId] = updatedData
      cachedConfig.mainData = JSON.stringify(mainData)

      // Set debug data for comparison of stored data to fetched data
      const debugMainData = JSON.parse(cachedConfig.debugMainData)
      debugMainData[jobId] = updatedData
      cachedConfig.debugMainData = JSON.stringify(debugMainData)

      setOfflineConfig(cachedConfig)
      if (!preventDefault && cachedConfig.BlockRefreshToggle == "false") location.reload()
    }
  }

  // Save data if onload flag is set and data exists in the saveArray
  if (cachedConfig.OnloadSaveToggle == "true"
    && cachedConfig.OfflineToggle == "false"
    && cachedConfig.saveArray != "[]"
    && cachedConfig.FreezeSave == "false") {
    onloadSaveFn()
  }

  const dataP = fetchFn([jobId])

  // Trigger Form Rendering
  dataP
    .then(({ cache, data }) => {

      if (cachedConfig.MainDataDebugToggle == "true") {

        // Show comparison of fetched data to previously stored main data
        console.info("Fetched MainData: ", data.main)
        console.info("Cached MainData: ", JSON.parse(cachedConfig.debugMainData))
      }

      if (cachedConfig.OfflineToggle == "true" && cachedConfig.mainData != "{}") {

        // Form is being run offline, replace fetched main data with cached data
        console.info("Cached SaveArray", JSON.parse(cachedConfig.saveArray))
        data.main = JSON.parse(cachedConfig.mainData)
      } else if (cachedConfig.OfflineToggle == "true" && cachedConfig.mainData == "{}") {

        // No cached data found, switch form to use fetched data
        console.info("Form was set to be used offline however no cached data exists, form will now be set to run online!")
        cachedConfig.OfflineToggle = "false"
      } else if (cachedConfig.OfflineToggle == "false" && cachedConfig.saveArray != "[]") {

        // Notify user that data in saveArray exists and will be saved on next save event
        console.info("Data exists in cached saveArray, next save event will save this data alongside any new changes")
        console.info("Cached SaveArray", JSON.parse(cachedConfig.saveArray))
      }

      setOfflineConfig(cachedConfig)
      formFn(jobId, saveFn, _.mapValues(widgets, widget => widget.open ? widget.open : widget))(dataForJobId(data, jobId), cache)
    })

  /**
   * Event Handlers
   */
  const body = document.body
  const loadingModalShowClass = 'show-loading-modal'
  const loadingModal = document.getElementsByClassName('modal-loading-box')[0]

  // Showing / hiding the loading spinner
  body.addEventListener(LifeCycleEvents.HTTPStart, () => {
    loadingModal.classList.add(loadingModalShowClass)
  })

  onEvent(LifeCycleEvents.HTTPEnd, () => {
    loadingModal.classList.remove(loadingModalShowClass)
  })

  // Debug loggers ( only for dev )
  if (__WEBPACK_LIVE__) {

    onEvent(LifeCycleEvents.HTTPError, function (event) {
      let e = event.detail
      console.error(event.type, e.stack ? e.stack : e)
    })

    onEvent(LifeCycleEvents.Error, function (event) {
      let e = event.detail
      console.error(event.type, e.stack ? e.stack : e)
    })

    onEvent(LifeCycleEvents.Fetched, event => {
      console.info(event.type, event.detail)
    })

    onEvent(LifeCycleEvents.Saved, event => {
      console.info(event.type, event.detail)
    })
  }
}

/**
 * Run the given save function for stored saveArray data unless config specifies an instance of condenser to use
 */
function runSaveFunction(config, formName, http, formSaveFunction) {

  const saveData = new FormData()
  const tempFiles = []
  const parsedSaveArray = JSON.parse(config.saveArray)
  let parsedSaveObj, index = 0

  parsedSaveArray.map(saveObj => {
    parsedSaveObj = { [formName]: saveObj }
    tempFiles[index] = new File([JSON.stringify(parsedSaveObj)], 'file.json')
    saveData.append("file" + index + ".json", tempFiles[index])
    index++
  })

  if (config.UseCondenser == "true") {
    if (config.LocalDataFileToggle == "true") {

      return axios({
        method: 'get',
        url: 'javascripts/node.js'
      })
        .then(dataJSFile => {

          tempFiles[index] = new File([dataJSFile.data], 'script.js')
          saveData.append("script.js", tempFiles[index])

          // Use condenser with local data.js file
          if (config.condenserUrl == "default") {
            return http.request({
              method: 'post',
              url: '/condenser/dynamic/runSaveBulk',
              headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
              },
              data: saveData
            })
              .then(res => res.data[formName])

          } else {
            return axios({
              method: 'post',
              url: config.condenserUrl + '/condenser/dynamic/runSaveBulk',
              headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
              },
              data: saveData
            })
              .then(res => res.data[formName])
          }
        })

    } else {

      // Use condenser with set formId
      if (config.condenserUrl == "default") {
        return http.request({
          method: 'post',
          url: '/condenser/form/saveBulk/' + config.condenserFormId,
          headers: {
            'content-type': 'multipart/form-data',
            'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
          },
          data: saveData
        })
          .then(res => res.data[formName])
      } else {
        return axios({
          method: 'post',
          url: config.condenserUrl + '/condenser/form/saveBulk/' + config.condenserFormId,
          headers: {
            'content-type': 'multipart/form-data',
            'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
          },
          data: saveData
        })
          .then(res => res.data[formName])
      }
    }
  } else {

    // Use local data.js file without condenser
    return Promise.resolve(formSaveFunction(JSON.parse(config.saveArray)))
  }
}

/**
 * Run the given fetch function for jobIds unless config specifies an instance of condenser to use
 */
function runFetchFunction(jobIds, activeForm, config, http, formFetchFunction, formCacheFetchFunction) {
  if (config.UseCondenser == "true") {
    if (!!formCacheFetchFunction) {
      throw new Error('Form cache functionality is disabled with condenser enabled, switch to local fetch to make use of this form.')
    }

    // Use condenser with local data.js file
    if (config.LocalDataFileToggle == "true") {

      return axios({
        method: 'get',
        url: 'javascripts/node.js'
      })
        .then(dataJSFile => {

          if (config.condenserUrl == "default") {
            return http.post('/condenser/dynamic/runFetch/', { 'script': dataJSFile.data, 'data': { 'jobIds': jobIds } })
              .then(res => res.data[activeForm.name])

          } else {
            return axios({
              method: 'post',
              url: config.condenserUrl + "/condenser/dynamic/runFetch/",
              headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
              },
              data: {
                'script': dataJSFile.data,
                'data': { 'jobIds': jobIds }
              }
            })
              .then(res => res.data[activeForm.name])

          }
        })

    } else {

      // Use condenser with set formId
      if (config.condenserUrl == "default") {
        return http.post('/condenser/form/fetch', { formId: config.condenserFormId, jobIds: jobIds })
          .then(res => res.data[activeForm.name])

      } else {
        return axios({
          method: 'post',
          url: config.condenserUrl + "/condenser/form/fetch",
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + __AUTH_API_TOKEN__
          },
          data: {
            'formId': config.condenserFormId,
            'jobIds': jobIds
          }
        })
          .then(res => res.data[activeForm.name])
      }
    }
  } else {
    const cacheP = formCacheFetchFunction && formCacheFetchFunction() || Promise.resolve({})

    return Promise
      .all([cacheP, formFetchFunction(jobIds)])
      .then(([cacheValue, dataValue]) => ({
        cache: cacheValue,
        data: dataValue
      }))
  }
}
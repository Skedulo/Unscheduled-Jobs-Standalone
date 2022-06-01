/**
 * Utility functions
 */

export function dataForJobId(obj, jobId) {

  const item = obj.main[jobId]

  return {
    main: item,
    common: obj.common
  }
}

export function setupBrowserDefaults() {

  const widgets = require('../native-widgets');
  const { dispatchEvent, onEvent } = require('../events')
  const { LifeCycle } = require('../lifecycle')

  global.dispatchEvent = dispatchEvent
  global.onEvent = onEvent
  global.LifeCycleEvents = LifeCycle
  global.widgets = widgets

}

const cformDefaults = {
  OfflineToggle: "false",
  MainDataDebugToggle: "false",
  OnloadSaveToggle: "false",
  BlockRefreshToggle: "false",
  LocalDataFileToggle: "false",
  UseCondenser: "false",
  FreezeSave: "false",
  IdToken: "",
  saveArray: "[]",
  mainData: "{}",
  debugMainData: "{}",
  condenserFormId: "",
  condenserUrl: ""
}

export function initCachedConfig() {
  const currentConfig = _.defaults(getOfflineConfig(), cformDefaults)

  // Just blindly set to localStorage again here since it won't make any difference.
  setOfflineConfig(currentConfig)

  return currentConfig
}

export function getOfflineConfig() {
  return JSON.parse(localStorage.getItem('cform'))
}

export function setOfflineConfig(config) {
  localStorage.setItem('cform', JSON.stringify(config))
}

export function resetCachedConfig() {
  localStorage.setItem('cform', JSON.stringify(cformDefaults))
}

export function registerConfigCLICommands(cachedConfig) {
  // Set IdToken for delegate request
  window.SetIdToken = (idToken) => {
    cachedConfig.IdToken = idToken
    setOfflineConfig(cachedConfig)

    console.info("--> Id Token Registered <--")
  }

  // Get IdToken for delegate request
  window.GetIdToken = () => {
    return getOfflineConfig().IdToken
  }

  // Handle back button handler registration
  window.ContainerRegisterBackButtonHandler = () => {
    console.info("--> Back Button Handler Registered <--")
  }

  // Reset all cached storage configurations
  window.RefreshOfflineState = () => {
    resetCachedConfig()
    location.reload()
  }

  // Return current save array data
  window.GetSaveArray = () => {
    console.info("Current Cached SaveArray", JSON.parse(cachedConfig.saveArray))
  }

  // Toggle offline behaviour
  window.ToggleOfflineState = () => {
    cachedConfig.OfflineToggle = cachedConfig.OfflineToggle == "true" ? "false" : "true"
    const connectivityString = cachedConfig.OfflineToggle == "false" ? "Online" : "Offline"
    console.info(">>> Form is now running " + connectivityString + " <<<")
    setOfflineConfig(cachedConfig)
  }

  // Freeze saveArray on error
  window.ToggleFreezeSaveArray = () => {
    cachedConfig.FreezeSave = cachedConfig.FreezeSave == "true" ? "false" : "true"
    const freezeString = cachedConfig.FreezeSave == "true" ? "is now" : "is no longer"
    console.info("--> SaveArray " + freezeString + " frozen <--")
    if (cachedConfig.FreezeSave == "true") console.info("No new data can be saved once the SaveArray is frozen")
    setOfflineConfig(cachedConfig)
  }

  // Show comparison of fetched main data in comparison to cached
  window.ToggleMainDataDebug = () => {
    cachedConfig.MainDataDebugToggle = cachedConfig.MainDataDebugToggle == "true" ? "false" : "true"
    const debugString = cachedConfig.MainDataDebugToggle == "true" ? "will now" : "will no longer"
    console.info("--> Main data comparison " + debugString + " be shown <--")
    if (cachedConfig.MainDataDebugToggle == "true") console.info("Warning: If stored main data is not a valid JSON object an error will be thrown")
    setOfflineConfig(cachedConfig)
  }

  // Save data on load if data exists
  window.ToggleOnloadSave = () => {
    cachedConfig.OnloadSaveToggle = cachedConfig.OnloadSaveToggle == "true" ? "false" : "true"
    const saveString = cachedConfig.OnloadSaveToggle == "true" ? "will now" : "will no longer"
    console.info("--> Cached saveArray " + saveString + " save onload if online <--")
    setOfflineConfig(cachedConfig)
  }

  // Use local data.js file in condenser
  window.ToggleLocalDataFile = () => {
    cachedConfig.LocalDataFileToggle = cachedConfig.LocalDataFileToggle == "true" ? "false" : "true"
    const localString = cachedConfig.LocalDataFileToggle == "true" ? "will now" : "will no longer"
    console.info("--> Condenser " + localString + " use local data.js file <--")
    setOfflineConfig(cachedConfig)
  }

  // Toggle condenser
  window.ToggleCondenser = () => {
    if (cachedConfig.UseCondenser == "false"
      && cachedConfig.condenserUrl == "") {
      console.error("Please setup condenser before using it")
      return
    }

    cachedConfig.UseCondenser = cachedConfig.UseCondenser == "true" ? "false" : "true"
    const condenserString = cachedConfig.UseCondenser == "true" ? "will now" : "will no longer"
    console.info("--> Condenser " + condenserString + " be used to save and fetch data <--")
    if (cachedConfig.UseCondenser == "true") console.info("Warning: Local data.js file will no longer be used")
    setOfflineConfig(cachedConfig)
  }

  // Legacy functionality - Prevent form from auto-refreshing on save
  window.ToggleRefreshBlock = () => {
    cachedConfig.BlockRefreshToggle = cachedConfig.BlockRefreshToggle == "true" ? "false" : "true"
    const blockString = cachedConfig.BlockRefreshToggle == "true" ? "is no longer" : "is now"
    console.info("--> Automatic page refreshing " + blockString + " active <--")
    if (cachedConfig.BlockRefreshToggle == "true") console.info("Warning: This may break offline functionality, only use if you are intending to test with legacy Custom Form SDK")
    setOfflineConfig(cachedConfig)
  }

  // Register condenser set form id command
  window.SetCondenserFormId = (formId) => {
    cachedConfig.condenserFormId = formId
    console.info("--> Condenser will now use formId " + formId + " <--")
    if (cachedConfig.LocalDataFileToggle == "true") {
      cachedConfig.LocalDataFileToggle = "false"
      console.info("Condenser will no longer use local data.js file unless toggled back on!")
    }
    setOfflineConfig(cachedConfig)
  }

  // Register condenser setup command
  window.SetCondenserEndpoint = (endpoint = "default") => {
    cachedConfig.condenserUrl = endpoint
    console.info("--> Condenser will now use endpoint: " + endpoint + " <--")
    console.info("Make sure that condenser is setup to use the same webserver!")
    setOfflineConfig(cachedConfig)

  }
}
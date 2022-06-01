const _ = require('lodash')
const { dispatchEvent, onEvent, onFirstIsolatedEvent } = require('./events')

const isolateEvent = (name, optional = '') => `NATIVE:${name}` + (optional ? `:${optional}` : '')

const getEvents = name => ({
  OpenEvent: isolateEvent(name, 'OPEN'),
  ActiveEvent: isolateEvent(name, 'ACTIVE'),
  ExpiredEvent: isolateEvent(name, 'EXPIRED'),
  VerifyEvent: isolateEvent(name, 'VERIFY')
})

const defineWidget = widgetName => {

  const { OpenEvent, ExpiredEvent, ActiveEvent, VerifyEvent } = getEvents(widgetName)

  const openWidget = (openParams) => {

    return new Promise((resolve, reject) => {

      const removeExpiredListener = onFirstIsolatedEvent(ExpiredEvent, e => {
        return reject('Native-Widget not defined for function')
      })

      let partCallback, widgetParams
      if (openParams instanceof Function) {
        partCallback = openParams
      }
      else {
        widgetParams = openParams
      }

      // Dispatch open widget event. On success, remove "expired" listener
      dispatchEvent(OpenEvent, () => {
        // Remove expired listener! Something's responded to this event.
        removeExpiredListener()
        // Trigger event to send promise' resolve and reject
        dispatchEvent(ActiveEvent, { resolve, reject, part: partCallback, parameters: widgetParams })
      })

      // Send expired event at the end ( which gets triggered if nothing picks up the previous open event ).
      setTimeout(() => dispatchEvent(ExpiredEvent), 0)
    })
  }

  const verifyWidget = () => {

    return new Promise((resolve, reject) => {

      const removeExpiredListener = onFirstIsolatedEvent(ExpiredEvent, e => {
        return resolve('unregistered')
      })

      // Dispatch verify widget event. On success, remove "expired" listener
      dispatchEvent(VerifyEvent, () => {
        // Remove expired listener! Something's responded to this event.
        removeExpiredListener()
        return resolve(widgetName)
      })

      // Send expired event at the end ( which gets triggered if nothing picks up the previous open event ).
      setTimeout(() => dispatchEvent(ExpiredEvent), 0)
    })
  }

  const registeredHandlers = []

  return {
    register: (onOpen) => {

      // When a new handler is registered, remove the old registration
      // and exclusively use the newer registration

      while (registeredHandlers.length) {
        (registeredHandlers.pop())()
      }

      const openHandler = onEvent(OpenEvent, event => {

        // This event has been handled.
        // Do not call sibling event handlers
        event.stopPropagation()
        event.stopImmediatePropagation()

        // Register to listen for the isolated event callback
        onFirstIsolatedEvent(ActiveEvent, activeEvent => {
          const { resolve, reject, part, parameters } = activeEvent.detail

          onOpen(resolve, reject, part, parameters)
        })

        // Call the "open" callback
        event.detail()
      })

      registeredHandlers.push(openHandler)

      const verifyHandler = onEvent(VerifyEvent, event => {
        event.detail()
      })

      registeredHandlers.push(verifyHandler)

      return openHandler
    },
    events: {
      OpenEvent,
      ActiveEvent,
      VerifyEvent
    },
    open: openWidget,
    verify: verifyWidget
  }
}

const bindWidgetVerification = (widgets) => {
  return () => {
    const widgetNames = Object.keys(widgets)

    return Promise.all(_.map(widgetNames, name => widgets[name].verify()))
      .then(registration => registration.filter(widgetName => widgetName !== 'unregistered'))
      .catch(e => 'Something went wrong: ' + e)
  }
}

const getExports = () => {
  const definedWidgets = {
    SignaturePanel: defineWidget('SignaturePanel'),
    BarCodeScanner: defineWidget('BarCodeScanner'),
    AudioRecorder: defineWidget('AudioRecorder'),
    VideoRecorder: defineWidget('VideoRecorder'),
    GetFromGallery: defineWidget('GetFromGallery'),
    TakePhoto: defineWidget('TakePhoto'),
    GetFromGalleryMulti: defineWidget('GetFromGalleryMulti'),
    AddressPicker: defineWidget('AddressPicker'),
    GetData: defineWidget('GetData'),
    GraphQL: defineWidget('GraphQL'),
    NetworkState: defineWidget('NetworkState')
  }

  const boundVerify = bindWidgetVerification(definedWidgets)

  return Object.assign({}, { getAvailableWidgets: boundVerify }, definedWidgets)
}

module.exports = getExports()

// export default getExports()

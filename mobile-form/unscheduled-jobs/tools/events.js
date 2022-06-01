const body = document.body

export function dispatchEvent(name, detail = null) {
  const event = new CustomEvent(name, { detail })
  body.dispatchEvent(event)
}

export function onEvent(name, cb, capture = false) {
  body.addEventListener(name, cb, capture)
  return () => body.removeEventListener(name, cb, capture)
}

export function onFirstIsolatedEvent(name, cb, capture = false) {
  
  const wrapperCb = function(e) {
    body.removeEventListener(name, wrapperCb, capture)

    // Prevent propagation
    e.preventDefault()
    e.stopPropagation()

    cb(e)
  }

  body.addEventListener(name, wrapperCb, capture)

  return () => body.removeEventListener(name, wrapperCb, capture)
}

// Custom Event Polyfill if it dosen't exist ( Older Android Devices )
(function () {

  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})(); 
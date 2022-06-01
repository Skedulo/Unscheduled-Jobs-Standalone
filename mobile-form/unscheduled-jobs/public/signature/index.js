import SignaturePad from 'signature_pad'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/merge'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/debounce'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/withLatestFrom'

const signatureTemplate = require('./signatureTemplate')

// Insert signature template into the DOM
document.body.insertAdjacentHTML('beforeend', signatureTemplate)

const wrapper = document.getElementById("modal-signature")
const canvas = wrapper.getElementsByTagName("canvas")[0]
const save = wrapper.getElementsByClassName("save")[0]
const clear = wrapper.getElementsByClassName("clear")[0]
const close = wrapper.getElementsByClassName("close")[0]

const sPad = new SignaturePad(canvas, {
  penColor: "rgb(0, 0, 0)",
  minWidth: 1,
  maxWidth: 2,
  onBegin: () => {
    save.disabled = clear.disabled = true
    canvas.classList.add('active')
  },
  onEnd: () => {
    save.disabled = clear.disabled = false
    canvas.classList.remove('active')
  }
})

/*
 * Form Logic
 */

// Clear signature pad
const clear$ = Observable.fromEvent(clear, 'click').map(() => sPad.clear())

// Close signature panel
const close$ = Observable.fromEvent(close, 'click')

// Save signature
const save$ = Observable.fromEvent(save, 'click')

/*
 * Dynamic form resizing
 */
function resizeCanvas() {

  var ratio = Math.max(window.devicePixelRatio || 1, 1);

  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);
  sPad.clear(); // otherwise isEmpty() might return incorrect value
}

const resize$ = Observable
  .fromEvent(window, "resize")
  .debounce(300 /* ms */)
  .startWith({})
  .map(resizeCanvas)

function register(type = "image/png") {

  const sigWidget = widgets.SignaturePanel

  return sigWidget.register((resolve, reject, onOpenHandler) => {

    const signatureClass = "signature-active"
    document.body.classList.add(signatureClass)

    if (typeof onOpenHandler === "function") {
      onOpenHandler.call(sPad)
    }

    save$.withLatestFrom(clear$.startWith(null), resize$.startWith(null), (save) => save)
      .map(() => {
        const dataURL = sPad.toDataURL(type) // save image as given type
        resolve(dataURL)
      })
      .merge(close$)
      .take(1)
      .subscribe(
      // OnNext
      () => { },
      // OnError
      () => { },
      // OnCompleted
      () => document.body.classList.remove(signatureClass)
    )
  })
}

const deRegister = register()
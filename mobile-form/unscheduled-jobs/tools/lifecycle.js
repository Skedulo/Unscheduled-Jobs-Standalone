const isolateEvent = name => `CF:${name}`

export const LifeCycle = {
  HTTPStart: isolateEvent('HTTP-START'),
  HTTPEnd: isolateEvent('HTTP-END'),

  Fetching: isolateEvent('FETCHING'),
  Fetched: isolateEvent('FETCHED'),

  Saving: isolateEvent('SAVING'),
  Saved: isolateEvent('SAVED'),

  Error: isolateEvent('ERROR'),
  HTTPError: isolateEvent('HTTP-ERROR')
}
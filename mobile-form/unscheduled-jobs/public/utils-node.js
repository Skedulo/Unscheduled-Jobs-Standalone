
export function fetchAsDataURI(url, http) {
  return Promise.resolve(http.get(url, { responseType: 'arraybuffer' }))
    .then(res => {
      const base64 = res.data.toString("base64")
      return `data:${res.headers['content-type']};base64,` + base64
    })
}

export function fetchUserAvatars(userIds, http, sizeHint) {
  const sizeHintEnum = Object.freeze({
    FULL: undefined,
    SMALL: 'small',
    THUMBNAIL: 'thumbnail'
  })
 
  if (sizeHint && !sizeHintEnum[sizeHint]) return Promise.reject(`Invalid avatar image size given: ${sizeHint}`)
 
  const queryParameters = sizeHint || sizeHint !== 'FULL'
    ? '?user_ids=' + userIds.join(',') + '&size_hint=' + sizeHintEnum[sizeHint]
    : '?user_ids=' + userIds.join(',')
 
  return Promise.resolve(http.get('/files/avatar' + queryParameters))
    .then(res => res.data)
    .then(results => {
      return Promise.all(userIds.map(userId => {
        return fetchAsDataURI(results.result[userId], http)
          .then(avatarData => ({ [userId]: avatarData }))
      })).then(avatars => Object.assign({}, ...avatars))
    })
 }

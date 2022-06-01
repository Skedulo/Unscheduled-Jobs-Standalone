
function convertBlobToDataURI(blob) {
  return new Promise((resolve) => {

    const reader = new FileReader()

    reader.onloadend = () => {
      resolve(reader.result)
    }

    reader.readAsDataURL(blob)

  })
}

export function fetchAsDataURI(url, http) {
  return Promise.resolve(http.get(url, { responseType: 'blob' }))
  .then(({ data }) => convertBlobToDataURI(data))
}

export function fetchUserAvatars(userIds, http, sizeHint) {
  if (userIds.length === 0) return []
 
  const sizeHintEnum = {
    FULL: undefined,
    SMALL: 'small',
    THUMBNAIL: 'thumbnail'
  }
 
  if (sizeHint && !sizeHintEnum[sizeHint]) return Promise.reject(`Invalid avatar image size given: ${sizeHint}`)
 
  const queryParameters = sizeHint && sizeHint !== 'FULL'
    ? '?user_ids=' + userIds.join(',') + '&size_hint=' + sizeHintEnum[sizeHint]
    : '?user_ids=' + userIds.join(',')
 
  return Promise.resolve(http.get('/files/avatar' + queryParameters))
    .then(res => res.data)
    .then(results => {
 
      const avatars = userIds.map(userId => {
        return {
          [userId]: results.result[userId]
        }
      })
 
      return Object.assign({}, ...avatars)
    })
 } 
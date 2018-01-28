/**
 * Auth helper class.
 *
 * Puts an auth token to the session storage and also retrieves it.
 *
 * Since session storage is handled synchronously, it also caches the retrieved token when it is first loaded
 * and then simply returns the cached token. The cache can be purged though if necessary.
 */
const store = window.sessionStorage
const key = 'imsazon.token'

let cache = null

export const getToken = () => {
  if (cache) {
    return cache
  } else {
    cache = store.getItem(key)

    return cache
  }
}

export const setToken = (token) => {
  if (token) {
    store.setItem(key, token)
  } else {
    clearCache()
    store.removeItem(key)
  }
}

export const clearCache = () => {
  cache = null
}

export const decodeJwt = (jwtString) => {
  const base64Url = jwtString.split('.')[1]

  const base64 = base64Url.replace('-', '+').replace('_', '/')

  return JSON.parse(window.atob(base64))
}

export const createUserObjectFromJwtString = (jwtString) => {
  // extract the user information from the decoded JWT
  const jwtPayload = decodeJwt(jwtString)

  return {
    id: jwtPayload.sub,
    name: jwtPayload.name,
    role: jwtPayload.role
  }
}

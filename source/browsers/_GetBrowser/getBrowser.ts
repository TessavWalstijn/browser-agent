import {
  detectChrome,
  detectEdge,
  detectFirefox,
  detectIE,
  detectSafari,
} from '../index.js'

export const matchBrowsers = (userAgent: string) => {
  const detectedResults = [
    detectChrome(userAgent),
    detectEdge(userAgent),
    detectFirefox(userAgent),
    detectIE(userAgent),
    detectSafari(userAgent),
  ].filter((value) => value !== null)

  return detectedResults
}

export const getBrowser = (userAgent?: string) => {
  let localUserAgent = userAgent
  if (userAgent === undefined) {
    localUserAgent = window.navigator.userAgent
  }

  if (!localUserAgent) {
    return null
  }

  return matchBrowsers(localUserAgent)[0]
}

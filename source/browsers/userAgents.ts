import { eBrowserType } from '../types/browser.types.js'
import { iCollectionUserAgents, iUserAgent } from '../types/userAgent.types.js'
import { userAgentsChrome } from './Chrome/chrome.userAgents.js'
import { userAgentsEdge } from './Edge/edge.userAgents.js'
import { userAgentsFirefox } from './Firefox/firefox.userAgents.js'
import { userAgentsIE } from './IE/ie.userAgents.js'
import { userAgentsSafari } from './Safari/safari.userAgents.js'
import { getBrowser } from './_GetBrowser/getBrowser.js'

export const collectionUserAgents: iCollectionUserAgents = {
  userAgentsChrome,
  userAgentsEdge,
  userAgentsFirefox,
  userAgentsIE,
  userAgentsSafari,
}

const checkUserAgent = (
  userAgent: string,
  version: string,
  indexedUserAgent: iUserAgent[],
) => {
  let indexed = false

  indexedUserAgent.forEach(({ browser, values: userAgents }) => {
    if (browser.version === version) {
      const found = userAgents.find(
        (indexedUserAgent) => indexedUserAgent === userAgent,
      )
      if (found !== undefined) {
        indexed = true
        return indexed
      }
    }
  })

  return indexed
}

export const isUserAgentIndexed = (userAgent: string) => {
  const browser = getBrowser(userAgent)
  if (browser === null)
    return {
      indexed: false,
      type: 'unknown',
      version: 'unknown',
    }

  const { type, version } = browser

  const indexed = {
    type,
    version,
  }

  switch (type) {
    case eBrowserType.chrome:
      return {
        ...indexed,
        indexed: checkUserAgent(userAgent, version, userAgentsChrome),
      }
    case eBrowserType.edge:
      return {
        ...indexed,
        indexed: checkUserAgent(userAgent, version, userAgentsEdge),
      }
    case eBrowserType.firefox:
      return {
        ...indexed,
        indexed: checkUserAgent(userAgent, version, userAgentsFirefox),
      }
    case eBrowserType.ie:
      return {
        ...indexed,
        indexed: checkUserAgent(userAgent, version, userAgentsIE),
      }
    case eBrowserType.safari:
      return {
        ...indexed,
        indexed: checkUserAgent(userAgent, version, userAgentsSafari),
      }
  }

  return {
    ...indexed,
    indexed: false,
  }
}

export const getTotalUserAgents = () => {
  let sum = 0
  for (const key in collectionUserAgents) {
    const userAgent = collectionUserAgents[key]
    userAgent.forEach(({ values }) => {
      sum += values.length
    })
  }

  return sum
}

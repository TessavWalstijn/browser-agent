import { describe } from 'vitest'
import {
  detectChrome,
  detectEdge,
  detectFirefox,
  detectIE,
  detectSafari,
  eBrowserType,
  // @ts-ignore
} from './dist/index.js'
import { collectionUserAgents } from '../source/browsers/userAgents.js'
import { testBrowser } from '../source/utils/testCreator'

const {
  userAgentsChrome,
  userAgentsEdge,
  userAgentsFirefox,
  userAgentsIE,
  userAgentsSafari,
} = collectionUserAgents

describe('Chrome tests', () => {
  testBrowser({
    browserName: eBrowserType.chrome,
    specificUserAgents: userAgentsChrome,
    detectBrowser: detectChrome,
  })
})

describe('Edge tests', () => {
  testBrowser({
    browserName: eBrowserType.edge,
    specificUserAgents: userAgentsEdge,
    detectBrowser: detectEdge,
  })
})

describe('Firefox tests', () => {
  testBrowser({
    browserName: eBrowserType.firefox,
    specificUserAgents: userAgentsFirefox,
    detectBrowser: detectFirefox,
  })
})

describe('Internet Explorer tests', () => {
  testBrowser({
    browserName: eBrowserType.ie,
    specificUserAgents: userAgentsIE,
    detectBrowser: detectIE,
  })
})

describe('Safari tests', () => {
  testBrowser({
    browserName: eBrowserType.safari,
    specificUserAgents: userAgentsSafari,
    detectBrowser: detectSafari,
  })
})

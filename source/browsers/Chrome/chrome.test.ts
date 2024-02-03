import { describe } from 'vitest'
import { testBrowser } from '../../utils/testCreator.js'
import { eBrowserType } from '../../types/browser.types.js'
import { detectChrome } from './chrome.js'
import { userAgentsChrome } from './chrome.userAgents.js'

describe('Chrome tests', () => {
  testBrowser({
    browserName: eBrowserType.chrome,
    specificUserAgents: userAgentsChrome,
    detectBrowser: detectChrome,
  })
})

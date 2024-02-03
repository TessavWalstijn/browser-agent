import { describe } from 'vitest'
import { testBrowser } from '../../utils/testCreator.js'
import { eBrowserType } from '../../types/browser.types.js'
import { detectSafari } from './safari.js'
import { userAgentsSafari } from './safari.userAgents.js'

describe('Safari tests', () => {
  testBrowser({
    browserName: eBrowserType.safari,
    specificUserAgents: userAgentsSafari,
    detectBrowser: detectSafari,
  })
})

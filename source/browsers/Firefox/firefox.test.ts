import { describe } from 'vitest'
import { testBrowser } from '../../utils/testCreator.js'
import { eBrowserType } from '../../types/browser.types.js'
import { detectFirefox } from './firefox.js'
import { userAgentsFirefox } from './firefox.userAgents.js'

describe('Firefox tests', () => {
  testBrowser({
    browserName: eBrowserType.firefox,
    specificUserAgents: userAgentsFirefox,
    detectBrowser: detectFirefox,
  })
})

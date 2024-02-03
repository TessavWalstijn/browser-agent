import { describe } from 'vitest'
import { testBrowser } from '../../utils/testCreator.js'
import { eBrowserType } from '../../types/browser.types.js'
import { detectIE } from './ie.js'
import { userAgentsIE } from './ie.userAgents.js'

describe('Internet Explorer tests', () => {
  testBrowser({
    browserName: eBrowserType.ie,
    specificUserAgents: userAgentsIE,
    detectBrowser: detectIE,
  })
})

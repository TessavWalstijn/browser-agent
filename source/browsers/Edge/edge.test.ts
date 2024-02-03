import { describe } from 'vitest'
import { eBrowserType } from '../../types/browser.types.js'
import { testBrowser } from '../../utils/testCreator.js'
import { detectEdge } from './edge.js'
import { userAgentsEdge } from './edge.userAgents.js'

describe('Edge tests', () => {
  testBrowser({
    browserName: eBrowserType.edge,
    specificUserAgents: userAgentsEdge,
    detectBrowser: detectEdge,
  })
})

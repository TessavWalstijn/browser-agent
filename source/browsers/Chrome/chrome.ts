import { eBrowserType, iBrowser } from '../../types/browser.types.js'
import { getChrome, hasEdge, hasSafari } from '../../utils/browserBrandRegex.js'

export const detectChrome = (userAgent: string): iBrowser | null => {
  const chrome = getChrome(userAgent)
  const safari = hasSafari(userAgent)
  const edge = hasEdge(userAgent)

  if (chrome && safari && !edge) {
    return {
      type: eBrowserType.chrome,
      version: chrome[2],
    }
  }

  return null
}

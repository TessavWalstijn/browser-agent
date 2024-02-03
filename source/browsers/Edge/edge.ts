import { eBrowserType, iBrowser } from '../../types/browser.types.js'
import { getEdge, hasSafari } from '../../utils/browserBrandRegex.js'

export const detectEdge = (userAgent: string): iBrowser | null => {
  const edge = getEdge(userAgent)
  const safari = hasSafari(userAgent)

  if (edge && safari) {
    return {
      type: eBrowserType.edge,
      version: edge[3],
    }
  }

  return null
}

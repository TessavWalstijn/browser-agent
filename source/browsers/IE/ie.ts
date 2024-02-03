import { eBrowserType } from '../../types/browser.types.js'
import { getIE } from '../../utils/browserBrandRegex.js'

export const detectIE = (userAgent: string) => {
  const { ie, trident } = getIE(userAgent)

  if (trident) {
    if (trident[2] === '7.0') {
      return {
        type: eBrowserType.ie,
        version: '11.0',
      }
    }
  }

  if (ie && trident) {
    // NOTE: edge case of IE 9 (Compatibility View)
    if (ie[2] === '7.0' && trident[2] === '5.0') {
      return {
        type: eBrowserType.ie,
        version: '9.0',
      }
    }

    // NOTE: edge case of IE 10 (Compatibility View)
    if (ie[2] === '8.0' && trident[2] === '6.0') {
      return {
        type: eBrowserType.ie,
        version: '10.0',
      }
    }

    // NOTE: edge case of IE 8 (Compatibility View)
    if (ie[2] === '7.0' && trident[2] === '4.0') {
      return {
        type: eBrowserType.ie,
        version: '8.0',
      }
    }

    // NOTE: edge case of IE 6 (Compatibility View)
    if (ie[2] === '8.0' && trident[2] === '4.0') {
      return {
        type: eBrowserType.ie,
        version: '8.0',
      }
    }
  }

  if (ie) {
    return {
      type: eBrowserType.ie,
      version: ie[2],
    }
  }

  return null
}

import { eBrowserType } from '../../types/browser.types.js'
import {
  hasEdge,
  getSafari,
  hasChrome,
  hasFirefox,
} from '../../utils/browserBrandRegex.js'

export const detectSafari = (userAgent: string) => {
  const safari = getSafari(userAgent)
  const edge = hasEdge(userAgent)
  const chrome = hasChrome(userAgent)
  const firefox = hasFirefox(userAgent)
  const version = userAgent.match(
    /(Version\/(\d+\.\d+\.\d+|\d+\.\d+dp1|\d+\.\d+))/,
  )

  const hasOthers = edge || chrome || firefox

  if (safari && version && !hasOthers) {
    return {
      type: eBrowserType.safari,
      version: version[2],
    }
  }

  if (safari && safari[2] && !hasOthers && !version) {
    return {
      type: eBrowserType.safari,
      version: safari[2],
    }
  }

  const appleWebKit = userAgent.match(/AppleWebKit(\/| )/)
  if (appleWebKit && !hasOthers) {
    return {
      type: eBrowserType.safari,
      version: 'pre 3.0',
    }
  }

  if (safari && !hasOthers && !version) {
    return {
      type: eBrowserType.safari,
      version: 'pre 3.0',
    }
  }

  return null
}

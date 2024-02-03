import { eBrowserType } from '../../types/browser.types.js'
import { getFirefox } from '../../utils/browserBrandRegex.js'

export const detectFirefox = (userAgent: string) => {
  const firefox = getFirefox(userAgent)
  if (!firefox) return null

  let version = firefox[2] || 'unknown'

  if (version === '(Debian-2.0.0.19-0etch1)') {
    version = '2.0.0.19'
  }

  return {
    type: eBrowserType.firefox,
    version,
  }
}

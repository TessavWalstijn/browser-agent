function detectSafari(userAgent) {
  var Safari = userAgent.match(/(Safari\/)/)
  var Edge = userAgent.match(/(Edg(e|)\/)(\d+\.\d+)/)
  var version = userAgent.match(/(Version\/(\d+\.\d+\.\d+|\d+\.\d+))/)

  if (Safari && version && !Edge) {
    return {
      browser: 'Safari',
      version: version[2] || 'pre 3.0',
    }
  }

  return null
}

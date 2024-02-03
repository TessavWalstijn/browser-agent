function detectChrome(userAgent) {
  var Chrome = userAgent.match(/(Chrome\/)(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+)/)

  if (Chrome) {
    return {
      browser: 'Chrome',
      version: Chrome[2],
    }
  }

  return null
}

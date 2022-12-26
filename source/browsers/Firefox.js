function detectFirefox(userAgent) {
  var FirefoxDevian = userAgent.match(/Firefox \(Debian-2.0.0.19-0etch1\)/)
  if (FirefoxDevian) {
    return {
      browser: 'Firefox',
      version: '2.0.0.19',
    }
  }

  var Firefox = userAgent.match(/(Firefox\/)(\d+\.\d+(b|B|))|Firefox/)
  if (Firefox) {
    return {
      browser: 'Firefox',
      version: Firefox[2] | 'unknown',
    }
  }

  return null
}

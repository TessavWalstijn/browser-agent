// List: https://www.useragentstring.com/pages/Internet%20Explorer/

function detectIE(userAgent) {
  var MSIE = userAgent.match(/(MSIE )(\d+\.\d+(b|B|))/)
  var Trident = userAgent.match(/(Trident\/)(\d\.0)/)

  if (Trident) {
    if (Trident[2] === '7.0') {
      return {
        browser: 'IE',
        version: 11,
      }
    }
  }

  if (MSIE && Trident) {
    // NOTE: edge case of IE 10
    if (MSIE[2] === '8.0' && Trident[2] === '6.0') {
      return {
        browser: 'IE',
        version: 8,
      }
    }

    // NOTE: edge case of IE 8
    if (MSIE[2] === '7.0' && Trident[2] === '4.0') {
      return {
        browser: 'IE',
        version: 8,
      }
    }

    // NOTE: edge case of IE 6
    if (MSIE[2] === '8.0' && Trident[2] === '4.0') {
      return {
        browser: 'IE',
        version: 8,
      }
    }
  }

  if (MSIE) {
    return {
      browser: 'IE',
      version: MSIE[2],
    }
  }

  return null
}

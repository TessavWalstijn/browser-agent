var browser = {
  browser: 'Unknown or not indexed',
  version: 0,
}

function setData(resultText) {
  var resultElement = document.getElementById('result')
  resultElement.innerHTML = resultText

  var userAgentElement = document.getElementById('userAgent')
  userAgentElement.innerHTML = window.navigator.userAgent
}

function filterResults(results) {
  var filtered = []
  var max = results.length
  for (var i = 0; i < max; i += 1) {
    var result = results[i]

    if (result !== null) {
      console.log(i, result)
      filtered.push(result)
    }
  }

  return filtered
}

function checkBrowsers() {
  var userAgent = window.navigator.userAgent

  var detectionResults = [
    detectFirefox(userAgent),
    detectChrome(userAgent),
    detectEdge(userAgent),
    detectSafari(userAgent),
    detectIE(userAgent),
  ]

  var results = filterResults(detectionResults)

  if (!results) return null
  if (results.length === 0) return null

  return results[0]
}

function checkOS() {
  var userAgent = window.navigator.userAgent

  switch (true) {
    case /Win/i.test(userAgent):
      return 'Windows'
    case /Mac/i.test(userAgent):
      return 'Mac OS'
    case /Ubuntu/i.test(userAgent):
      return 'Ubuntu'
    case /Fedora/i.test(userAgent):
      return 'Fedora'
    case /Red Hat/i.test(userAgent):
      return 'Red Hat'
    case /Linux Mint/i.test(userAgent):
      return 'Linux Mint'
    case /CentOS/i.test(userAgent):
      return 'CentOS'
    case /Debian/i.test(userAgent):
      return 'Debian'
    case /Linux/i.test(userAgent):
      return 'Linux'
    case /Android/i.test(userAgent):
      return 'Android'
    case /like Mac/i.test(userAgent):
      return 'iOS'
    case /X11/i.test(userAgent):
      return 'Unix'
    default:
      return 'Unknown'
  }
}

function getStats() {
  var browser = checkBrowsers()
  var OS = checkOS()

  var resultText = OS + ' - ' + browser.browser + ' - ' + browser.version

  setData(resultText)
}

getStats()

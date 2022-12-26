function detectEdge(userAgent) {
  var Edge = userAgent.match(/(Edg(e|)\/)(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+)/)
  var Chrome = userAgent.match(/(Chrome\/)/)
  var Safari = userAgent.match(/(Safari\/)/)

  if (Edge && Chrome && Safari) {
    return {
      browser: 'Edge',
      version: Edge[3],
    }
  }

  return null
}

export const getChrome = (userAgent: string) =>
  userAgent.match(/(Chrome\/)(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+)/)

export const hasChrome = (userAgent: string) => getChrome(userAgent) !== null

export const getEdge = (userAgent: string) =>
  userAgent.match(/(Edg(e|)\/)(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+)/)

export const hasEdge = (userAgent: string) => getEdge(userAgent) !== null

export const getFirefox = (userAgent: string) => {
  const firefoxDebian = userAgent.match(/(Firefox )(\(Debian-2.0.0.19-0etch1\))/)
  if (firefoxDebian) return firefoxDebian

  return userAgent.match(/(Firefox\/)(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+(b|B|)|\d+)|Firefox/)
}

export const hasFirefox = (userAgent: string) => getFirefox(userAgent) !== null

export const getIE = (userAgent: string) => {
  const ie = userAgent.match(/(MSIE )(\d+\.\d+(b|B|))/)
  const trident = userAgent.match(/(Trident\/)(\d\.0)/)

  return {
    ie,
    trident,
  }
}

export const hasIE = (userAgent: string) => {
  const { ie, trident } = getIE(userAgent)
  if (ie || trident) return true
  return false
}

export const getSafari = (userAgent: string) => {
  const match = userAgent.match(/(Safari )(\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+)/)
  if (match) return match

  return userAgent.match(/(Safari\/)/)
}


export const hasSafari = (userAgent: string) => getSafari(userAgent) !== null

export const detectWindows = (userAgent: string) => /Win/i.test(userAgent)
export const detectMac = (userAgent: string) => /Mac/i.test(userAgent)
export const detectUbuntu = (userAgent: string) => /Ubuntu/i.test(userAgent)
export const detectFedora = (userAgent: string) => /Fedora/i.test(userAgent)
export const detectRedHat = (userAgent: string) => /Red Hat/i.test(userAgent)
export const detectLinuxMint = (userAgent: string) =>
  /Linux Mint/i.test(userAgent)
export const detectCentOS = (userAgent: string) => /CentOS/i.test(userAgent)
export const detectDebian = (userAgent: string) => /Debian/i.test(userAgent)
export const detectLinux = (userAgent: string) => /Linux/i.test(userAgent)
export const detectAndroid = (userAgent: string) => /Android/i.test(userAgent)
export const detectIOS = (userAgent: string) => /iPhone/i.test(userAgent)
export const detectIPadOS = (userAgent: string) => /iPad/i.test(userAgent)
export const detectUnix = (userAgent: string) => /X11/i.test(userAgent)

export const getOperatingSystem = (userAgent) => {
  let localUserAgent = userAgent
  if (userAgent === undefined) {
    localUserAgent = window.navigator.userAgent
  }

  if (!localUserAgent) {
    return 'Unknown'
  }

  switch (true) {
    case detectWindows(localUserAgent):
      return 'Windows'
    case detectMac(localUserAgent):
      return 'Mac OS'
    case detectUbuntu(localUserAgent):
      return 'Ubuntu'
    case detectFedora(localUserAgent):
      return 'Fedora'
    case detectRedHat(localUserAgent):
      return 'Red Hat'
    case detectLinuxMint(localUserAgent):
      return 'Linux Mint'
    case detectCentOS(localUserAgent):
      return 'CentOS'
    case detectDebian(localUserAgent):
      return 'Debian'
    case detectLinux(localUserAgent):
      return 'Linux'
    case detectAndroid(localUserAgent):
      return 'Android'
    case detectIOS(localUserAgent):
      return 'iOS'
    case detectIPadOS(localUserAgent):
      return 'iPadOS'
    case detectUnix(userAgent):
      return 'Unix'
    default:
      return 'Unknown'
  }
}
export const getOS = getOperatingSystem

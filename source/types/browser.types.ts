export const eBrowserType = {
  chrome: 'Chrome',
  edge: 'Edge',
  firefox: 'Firefox',
  ie: 'IE',
  safari: 'Safari',
} as const

export type tBrowserType = (typeof eBrowserType)[keyof typeof eBrowserType]

export interface iBrowser {
  type: tBrowserType
  version: string
}

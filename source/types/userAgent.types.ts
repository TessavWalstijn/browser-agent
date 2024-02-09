import { iBrowser } from './browser.types'

export interface iUserAgent {
  values: string[]
  browser: iBrowser
}

export interface iCollectionUserAgents {
  [key: string]: iUserAgent[]
}

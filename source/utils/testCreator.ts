import { expect, test, describe } from 'vitest'
import { iBrowser, tBrowserType } from '../browsers/index.js'
import { collectionUserAgents } from '../browsers/userAgents.js'
import { iUserAgent } from '../types/userAgent.types.js'

interface iProps {
  browserName: tBrowserType
  specificUserAgents: iUserAgent[]
  detectBrowser: (userAgent: string) => iBrowser | null
}

export const testBrowser = ({
  browserName,
  specificUserAgents,
  detectBrowser,
}: iProps) => {
  describe(`Testing ${browserName} matches`, () => {
    specificUserAgents.forEach(({ values, browser }) => {
      values.forEach((value) => {
        test(value, () => {
          expect(detectBrowser(value)).toEqual(browser)
        })
      })
    })
  })

  describe(`Testing ${browserName} mis matches`, () => {
    for (const key in collectionUserAgents) {
      if (key !== `userAgents${browserName}`) {
        const userAgent = collectionUserAgents[key]
        userAgent.forEach(({ values }) => {
          values.forEach((value) => {
            test(value, () => {
              expect(detectBrowser(value)).toEqual(null)
            })
          })
        })
      }
    }
  })
}

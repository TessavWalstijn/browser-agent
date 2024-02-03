import { expect, test, describe } from 'vitest'
import { collectionUserAgents } from '../userAgents.js'
import { matchBrowsers } from './getBrowser.js'

describe('Testing getBrowser matches', () => {
  for (const key in collectionUserAgents) {
    const userAgent = collectionUserAgents[key]
    userAgent.forEach(({ values, browser }) => {
      values.forEach((value) => {
        test(value, () => {
          expect(matchBrowsers(value)).toEqual([browser])
        })
      })
    })
  }
})

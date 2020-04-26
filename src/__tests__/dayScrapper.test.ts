import {
  DAY_22_JANUARY_2020,
  DAY_SCRAPPING_TEST,
  MONTH_SCRAPPING_TEST,
  YEAR_SCRAPPING_TEST,
} from './constants'
import dayScrapper from '../app/scrapper/dayScrapper'

beforeEach(() => {
  jest.setTimeout(10000)
})

test('Get day detail of 22 january 2020', async () => {
  const day = await dayScrapper({
    date: DAY_SCRAPPING_TEST,
    month: MONTH_SCRAPPING_TEST,
    year: YEAR_SCRAPPING_TEST,
  })
  expect(day).not.toBeNull()
  expect(day).toStrictEqual(DAY_22_JANUARY_2020)
})

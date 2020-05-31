import eventScrapper from '../../src/App/Scrapper/eventScrapper'
import {
  EVENT_JANUARY_2020,
  MONTH_SCRAPPING_TEST,
  YEAR_SCRAPPING_TEST,
} from '../constants'

beforeEach(() => {
  jest.setTimeout(10000)
})

test('Get array of event from januari 2020', async () => {
  const events = await eventScrapper({
    month: MONTH_SCRAPPING_TEST,
    year: YEAR_SCRAPPING_TEST,
  })
  expect(events).not.toBeNull()
  expect(events).toStrictEqual(EVENT_JANUARY_2020)
})

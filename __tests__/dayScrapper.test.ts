import {
  DAY_22_JANUARY_2020,
  DAY_SCRAPPING_TEST,
  MONTH_SCRAPPING_TEST,
  YEAR_SCRAPPING_TEST,
} from './constants'
import dayScrapper from '../src/App/Scrapper/DayScrapper/dayScrapper'
import wukuScrapper from '../src/App/Scrapper/DayScrapper/wukuScrapper'
import uripScrapper from '../src/App/Scrapper/DayScrapper/uripScrapper'
import sasihScrapper from '../src/App/Scrapper/DayScrapper/sasihScrapper'
import ingkelScrapper from '../src/App/Scrapper/DayScrapper/ingkelScrapper'
import wewaranScrapper from '../src/App/Scrapper/DayScrapper/wewaranScrapper'
import bhataraScrapper from '../src/App/Scrapper/DayScrapper/bhataraScrapper'
import penanggalPangelongScrapper from '../src/App/Scrapper/DayScrapper/penanggalPangelongScrapper'

describe('Day Scrapper Test', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })
  test('Get sasih from 22 January 2020', async () => {
    const sasih = await sasihScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })
    expect(sasih).not.toBeNull()
    expect(sasih).toStrictEqual(DAY_22_JANUARY_2020.sasih)
  })

  test('Get ingkel from 22 January 2020', async () => {
    const ingkel = await ingkelScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(ingkel).not.toBeNull()
    expect(ingkel).toStrictEqual(DAY_22_JANUARY_2020.ingkel)
  })

  test('Get penanggal pangelong from 22 January 2020', async () => {
    const penanggalPangelong = await penanggalPangelongScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(penanggalPangelong).not.toBeNull()
    expect(penanggalPangelong).toStrictEqual(
      DAY_22_JANUARY_2020.penanggal_pangelong
    )
  })

  test('Get urip from 22 January 2020', async () => {
    const urip = await uripScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(urip).not.toBeNull()
    expect(urip).toStrictEqual(DAY_22_JANUARY_2020.urip)
  })

  test('Get wuku from 22 January 2020', async () => {
    const wuku = await wukuScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(wuku).not.toBeNull()
    expect(wuku).toStrictEqual(DAY_22_JANUARY_2020.wuku)
  })

  test('Get wewaran from 22 January 2020', async () => {
    const wewaran = await wewaranScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(wewaran).not.toBeNull()
    expect(wewaran).toStrictEqual(DAY_22_JANUARY_2020.wewaran)
  })

  test('Get bhatara from 22 Janary 2020', async () => {
    const wuku = DAY_22_JANUARY_2020.wuku
    const bhatara = await bhataraScrapper(wuku)

    expect(bhatara).not.toBeNull()
    expect(bhatara).toStrictEqual(DAY_22_JANUARY_2020.bhatara)
  })

  test('Get day detail from 22 January 2020', async () => {
    const dayDetail = await dayScrapper({
      date: DAY_SCRAPPING_TEST,
      month: MONTH_SCRAPPING_TEST,
      year: YEAR_SCRAPPING_TEST,
    })

    expect(dayDetail).not.toBeNull()
    expect(dayDetail).toStrictEqual(DAY_22_JANUARY_2020)
  })
})

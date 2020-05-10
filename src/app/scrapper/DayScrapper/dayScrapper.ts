import { DayScrapper, Day } from '../../types'
import wukuScrapper from './wukuScrapper'
import uripScrapper from './uripScrapper'
import sasihScrapper from './sasihScrapper'
import ingkelScrapper from './ingkelScrapper'
import wewaranScrapper from './wewaranScrapper'
import penanggalPangelongScrapper from './penanggalPangelongScrapper'
import {
  getBalineseDayName,
  getEnglishDayName,
  getBahasaDayName,
  getBahasaMonthName,
  getEnglishMonthName,
  getCakaYears,
} from '../utils'

const dayScrapper: DayScrapper = async (params) => {
  try {
    const urip = await uripScrapper(params)
    const wuku = await wukuScrapper(params)
    const sasih = await sasihScrapper(params)
    const ingkel = await ingkelScrapper(params)
    const wewaran = await wewaranScrapper(params)
    const penanggalPangelong = await penanggalPangelongScrapper(params)

    if (!wewaran || !penanggalPangelong || !wuku || !ingkel)
      throw new Error('Failed to fetch')

    const scrappedDay = new Date()
    scrappedDay.setTime(0)
    scrappedDay.setMonth(params.month - 1)
    scrappedDay.setFullYear(params.year)
    scrappedDay.setDate(params.date)

    const day: Day = {
      timestamp: scrappedDay.toISOString(),
      date: params.date,
      day_name: {
        balinese: getBalineseDayName(scrappedDay.getDay()),
        bahasa: getBahasaDayName(scrappedDay.getDay()),
        english: getEnglishDayName(scrappedDay.getDay()),
      },
      month: {
        index: params.month,
        english: getEnglishMonthName(scrappedDay.getMonth() + 1),
        bahasa: getBahasaMonthName(scrappedDay.getMonth() + 1),
      },
      year: {
        masehi: params.year,
        caka: getCakaYears(params.year),
      },
      wewaran,
      penanggal_pangelong: penanggalPangelong,
      wuku,
      ingkel,
      sasih,
      urip,
    }

    return day
  } catch (e) {
    return null
  }
}

export default dayScrapper

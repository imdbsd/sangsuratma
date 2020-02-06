import axios from 'axios'
import cheerio from 'cheerio'
import { DayScrapper, Day } from '../types'
import {
  getBalineseDayName,
  getEnglishDayName,
  getBahasaDayName,
  getBahasaMonthName,
  getEnglishMonthName,
  isValidWuku,
  isValidSaptawara,
  isValidSasih,
  getPenanggalPangelongStatus,
} from './utils'

const dayScrapper: DayScrapper = async params => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )

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
        english: getEnglishMonthName(scrappedDay.getMonth()),
        bahasa: getBahasaMonthName(scrappedDay.getMonth()),
      },
      year: {
        masehi: params.year,
        caka: null,
      },
      wewaran: {
        ekawara: null,
        dwiwara: null,
        triwara: null,
        caturwara: null,
        pancawara: null,
        sadwara: null,
        saptawara: null,
        astawara: null,
        sangawara: null,
        dasawara: null,
      },
      penanggal_pangelong: {
        status: null,
        value: null,
      },
      wuku: null,
      ingkel: null,
      sasih: null,
      urip: null,
    }

    let $ = cheerio.load(html)

    const centerUpCell = $('.isitanggal.hitam.tengahbawah').html()
    if (!centerUpCell) {
      return null
    }
    const centerUpCellContent = centerUpCell.trim().split('<br>')
    if (!isValidWuku(centerUpCellContent[1])) return null
    day.wuku = centerUpCellContent[1]

    const saptawara = $(centerUpCellContent[0]).text()
    if (!isValidSaptawara(saptawara)) return null
    day.wewaran.saptawara = saptawara

    const sasih = centerUpCellContent[2].split('-')[1]
    if (!isValidSasih(sasih)) return null
    day.sasih = sasih

    day.penanggal_pangelong.status = getPenanggalPangelongStatus(
      centerUpCellContent[3]
    )
    day.penanggal_pangelong.value = parseInt($(centerUpCellContent[3]).text())

    console.log({ day })

    return null
  } catch (e) {
    console.log(e)
    return null
  }
}

dayScrapper({
  date: 10,
  month: 1,
  year: 2020,
})

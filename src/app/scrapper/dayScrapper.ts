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
  isValidEkawara,
  isValidTriwara,
  isValidCaturwara,
  isValidPancawara,
  isValidSadwara,
  isValidSaptawara,
  isValidAstawara,
  isValidSangawara,
  isValidDasawara,
  isValidSasih,
  getPenanggalPangelongStatus,
  isValidDwiwara,
  validateSangawaraValue,
  getCakaYears,
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
        english: getEnglishMonthName(scrappedDay.getMonth() + 1),
        bahasa: getBahasaMonthName(scrappedDay.getMonth() + 1),
      },
      year: {
        masehi: params.year,
        caka: getCakaYears(params.year),
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
    if (!centerUpCell) throw new Error('No centerUpCell content')
    const centerUpCellContent = centerUpCell.trim().split('<br>')
    if (!isValidWuku(centerUpCellContent[1])) return null
    day.wuku = centerUpCellContent[1]

    const saptawara = $(centerUpCellContent[0]).text()
    if (!isValidSaptawara(saptawara)) throw new Error('No Saptawara content')
    day.wewaran.saptawara = saptawara

    const sasih = centerUpCellContent[2].split('-')[1]
    if (!isValidSasih(sasih)) throw new Error('No Sasih content')
    day.sasih = sasih

    day.penanggal_pangelong.status = getPenanggalPangelongStatus(
      centerUpCellContent[3]
    )
    day.penanggal_pangelong.value = parseInt($(centerUpCellContent[3]).text())

    const leftCell = $(
      'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kiri'
    ).html()
    if (!leftCell) throw new Error('No leftCell content')
    const leftCellContent = leftCell.trim().split('<br>')

    const ekawara = leftCellContent[3]
    day.wewaran.ekawara = isValidEkawara(ekawara) ? ekawara : null

    const dwiwara = leftCellContent[2]
    if (!isValidDwiwara(dwiwara)) throw new Error('No Dwiwara content')
    day.wewaran.dwiwara = dwiwara

    const triwara = $(leftCellContent[0]).text()
    if (!isValidTriwara(triwara)) throw new Error('No Triwara content')
    day.wewaran.triwara = triwara

    if (!isValidCaturwara(leftCellContent[1]))
      throw new Error('No Caturwara content')
    day.wewaran.caturwara = leftCellContent[1]

    const urip = leftCellContent[4].split('=')
    if (!urip[1]) throw new Error('No Urip content')
    day.urip = urip[1]

    const rightCell = $(
      'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kanan'
    ).html()
    if (!rightCell) throw new Error('No rightCell content')
    const rightCellContent = rightCell.trim().split('<br>')

    const pancawara = $(rightCellContent[0]).text()
    if (!isValidPancawara(pancawara)) throw new Error('No Pancawara content')
    day.wewaran.pancawara = pancawara

    const sadwara = rightCellContent[1]
    if (!isValidSadwara(sadwara)) throw new Error('No Sadwara content')
    day.wewaran.sadwara = sadwara

    const astawara = rightCellContent[2]
    if (!isValidAstawara(astawara)) throw new Error('No Astawara content')
    day.wewaran.astawara = astawara

    const sangawara = rightCellContent[3]
    // console.log(sangawara)
    if (!isValidSangawara(sangawara)) throw new Error('No Sangawara content')
    day.wewaran.sangawara = validateSangawaraValue(sangawara)

    const dasawara = rightCellContent[4]
    if (!isValidDasawara(dasawara)) throw new Error('No Dasawara content')
    day.wewaran.dasawara = dasawara

    console.log({ day })
    return day
  } catch (e) {
    console.log(e)
    return null
  }
}

export default dayScrapper
// dayScrapper({
//   date: 22,
//   month: 1,
//   year: 2020,
// })

import axios from 'axios'
import cheerio from 'cheerio'
import {
  isValidEkawara,
  isValidDwiwara,
  isValidTriwara,
  isValidCaturwara,
  isValidPancawara,
  isValidSadwara,
  isValidSaptawara,
  isValidAstawara,
  isValidSangawara,
  isValidDasawara,
  validateSangawaraValue,
} from '../utils'
import { DayScrapperParams as Params, Wewaran } from '../../types'

const LEFT_CELL_SELECTOR =
  'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kiri'
const CENTER_UP_CELL_SELECTOR = '.isitanggal.hitam.tengahbawah'
const RIGHT_CELL_SELECTOR =
  'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kanan'

const wewaranScrapper = async (params: Params): Promise<Wewaran | null> => {
  const wewaran: Wewaran = {
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
  }
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )
    let $ = cheerio.load(html)
    const leftCell = $(LEFT_CELL_SELECTOR).html()
    const centerUpCell = $(CENTER_UP_CELL_SELECTOR).html()
    const rightCell = $(RIGHT_CELL_SELECTOR).html()

    if (!leftCell) throw new Error('No leftCell content')
    if (!rightCell) throw new Error('No rightCell content')
    if (!centerUpCell) throw new Error('No centerUpCell content')

    const leftCellContent = leftCell.trim().split('<br>')
    const rightCellContent = rightCell.trim().split('<br>')
    const centerUpCellContent = centerUpCell.trim().split('<br>')

    const saptawara = $(centerUpCellContent[0]).text()
    if (!isValidSaptawara(saptawara)) throw new Error('No Saptawara content')
    wewaran.saptawara = saptawara

    const ekawara = leftCellContent[3]
    wewaran.ekawara = isValidEkawara(ekawara) ? ekawara : null

    const dwiwara = leftCellContent[2]
    if (!isValidDwiwara(dwiwara)) throw new Error('No Dwiwara content')
    wewaran.dwiwara = dwiwara

    const triwara = $(leftCellContent[0]).text()
    if (!isValidTriwara(triwara)) throw new Error('No Triwara content')
    wewaran.triwara = triwara

    if (!isValidCaturwara(leftCellContent[1]))
      throw new Error('No Caturwara content')
    wewaran.caturwara = leftCellContent[1]

    const pancawara = $(rightCellContent[0]).text()
    if (!isValidPancawara(pancawara)) throw new Error('No Pancawara content')
    wewaran.pancawara = pancawara

    const sadwara = rightCellContent[1]
    if (!isValidSadwara(sadwara)) throw new Error('No Sadwara content')
    wewaran.sadwara = sadwara

    const astawara = rightCellContent[2]
    if (!isValidAstawara(astawara)) throw new Error('No Astawara content')
    wewaran.astawara = astawara

    const sangawara = rightCellContent[3]
    if (!isValidSangawara(sangawara)) throw new Error('No Sangawara content')
    wewaran.sangawara = validateSangawaraValue(sangawara)

    const dasawara = rightCellContent[4]
    if (!isValidDasawara(dasawara)) throw new Error('No Dasawara content')
    wewaran.dasawara = dasawara

    return wewaran
  } catch (err) {
    console.log(err)
    return null
  }
}

export default wewaranScrapper

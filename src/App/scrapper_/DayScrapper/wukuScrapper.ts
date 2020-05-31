import axios from 'axios'
import cheerio from 'cheerio'
import { isValidWuku } from '../utils'
import { getSelector } from './classNameSelector'
import { DayScrapperParams as Params, Wuku } from '../../types'

const selector = getSelector('CENTER_UP_CELL_SELECTOR')

const wukuScrapper = async (params: Params): Promise<Wuku | null> => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )
    const $ = cheerio.load(html)
    const centerUpCell = $(selector).html()

    if (!centerUpCell) throw new Error('No centerUpCell content')

    const centerUpCellContent = centerUpCell.trim().split('<br>')
    if (!isValidWuku(centerUpCellContent[1])) return null
    return centerUpCellContent[1]
  } catch (e) {
    return null
  }
}

export default wukuScrapper

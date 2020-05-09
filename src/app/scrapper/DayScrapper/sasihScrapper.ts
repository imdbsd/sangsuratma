import axios from 'axios'
import cheerio from 'cheerio'
import { isValidSasih } from '../utils'
import { getSelector } from './classnameSelector'
import { DayScrapperParams as Params, Sasih } from '../../types'

const selector = getSelector('CENTER_UP_CELL_SELECTOR')

const sasihScrapper = async (params: Params): Promise<Sasih | null> => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )

    const $ = cheerio.load(html)
    const centerUpCell = $(selector).html()

    if (!centerUpCell) throw new Error('No centerUpCell content')

    const centerUpCellContent = centerUpCell.trim().split('<br>')

    const sasih = centerUpCellContent[2].split('-')[1]
    if (!isValidSasih(sasih)) throw new Error('No Sasih content')
    return sasih
  } catch (err) {
    return null
  }
}

export default sasihScrapper

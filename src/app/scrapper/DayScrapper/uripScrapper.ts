import axios from 'axios'
import cheerio from 'cheerio'
import { getSelector } from './classnameSelector'
import { DayScrapperParams as Params } from '../../types'

const selector = getSelector('LEFT_CELL_SELECTOR')

const uripScrapper = async (params: Params): Promise<string | null> => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )

    const $ = cheerio.load(html)
    const leftCell = $(selector).html()

    if (!leftCell) throw new Error('No leftCell content')
    const leftCellContent = leftCell.trim().split('<br>')

    const urip = leftCellContent[4].split('=')
    if (!urip[1]) throw new Error('No Urip content')
    return urip[1]
  } catch (err) {
    return null
  }
}

export default uripScrapper

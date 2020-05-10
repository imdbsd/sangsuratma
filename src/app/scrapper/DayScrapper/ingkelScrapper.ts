import axios from 'axios'
import cheerio from 'cheerio'
import getWeekOfMonth from 'date-fns/getWeekOfMonth'
import { isValidIngkel } from '../utils'
import { getSelector } from './classnameSelector'
import { DayScrapperParams as Params, Ingkel } from '../../types'

const selector = getSelector('ALL_INGKEL_CELL_SELECTOR')

const ingkelScrapper = async (params: Params): Promise<Ingkel | null> => {
  try {
    const { data: html } = await axios(
      `http://kalenderbali.info/?month=${params.month}&year${params.month}&submit=Tampilkan`
    )

    const $ = cheerio.load(html)
    const ingkelsCell = $(selector).html()

    if (!ingkelsCell) throw new Error('No ingkelsCell content')

    const ingkels: string[] = $(selector)
      .filter((_, element) => $(element).children().length === 0)
      .map((_, element) => $(element).text().trim())
      .get()

    const weekIndex = getWeekOfMonth(
      new Date(params.year, params.month - 1, params.date)
    )
    const ingkel = ingkels[weekIndex]

    if (!isValidIngkel(ingkel)) throw new Error('Invlalid ingkel value')
    return ingkel
  } catch (err) {
    return null
  }
}

export default ingkelScrapper

import axios from 'axios'
import cheerio from 'cheerio'
import { DayScrapperParams as Params, Wewaran } from '../../types'

const LEFT_CELL_SELECTOR =
  'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kiri'

const wewaranScrapper = async (params: Params): Promise<Wewaran | null> => {
  const wewaran = {
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
    if (!leftCell) throw new Error('No leftCell content')

    return wewaran
  } catch (err) {
    console.log(err)
    return null
  }
}

export default wewaranScrapper

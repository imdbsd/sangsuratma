import axios from 'axios'
import cheerio from 'cheerio'
import { getPenanggalPangelongStatus } from '../utils'
import { DayScrapperParams as Params, PenanggalPangelong } from '../../types'

const CENTER_UP_CELL_SELECTOR = '.isitanggal.hitam.tengahbawah'

const penanggalPangelongScrapper = async (
  params: Params
): Promise<PenanggalPangelong | null> => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/kalender/detailHari/${params.date}/${params.month}/${params.year}/hitam/html`
    )

    const penanggalPangelong: PenanggalPangelong = {
      status: null,
      value: null,
    }

    let $ = cheerio.load(html)

    const centerUpCell = $(CENTER_UP_CELL_SELECTOR).html()
    if (!centerUpCell) throw new Error('No centerUpCell content')
    const centerUpCellContent = centerUpCell.trim().split('<br>')

    penanggalPangelong.status = getPenanggalPangelongStatus(
      centerUpCellContent[3]
    )
    penanggalPangelong.value = parseInt($(centerUpCellContent[3]).text())

    return penanggalPangelong
  } catch (e) {
    return null
  }
}

export default penanggalPangelongScrapper

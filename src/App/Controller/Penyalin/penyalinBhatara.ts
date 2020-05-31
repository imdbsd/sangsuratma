import { Response } from 'express'
import { Request } from '../Penyalin'
import wukuScrapper from '../../Scrapper/DayScrapper/wukuScrapper'
import bhataraScrapper from '../../Scrapper/DayScrapper/bhataraScrapper'

const penyalinBhatara = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const wuku = await wukuScrapper(dayParams)
    if (!wuku)
      throw new Error(
        `Cannot find bhatara for query: ${JSON.stringify(dayParams)}`
      )
    const bhatara = await bhataraScrapper(wuku)
    if (!bhatara)
      throw new Error(
        `Cannot find bhatara for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ bhatara })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinBhatara

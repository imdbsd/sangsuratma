import { Response } from 'express'
import { Request } from '../Penyalin'
import wukuScrapper from '../../Scrapper/DayScrapper/wukuScrapper'

const penyalinWuku = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('')
    const wuku = await wukuScrapper(dayParams)
    if (!wuku)
      throw new Error(
        `Cannot find wuku for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ wuku })
  } catch (err) {
    return res.status(400).json({
      status: 'FAILED',
      error: err.message,
    })
  }
}

export default penyalinWuku

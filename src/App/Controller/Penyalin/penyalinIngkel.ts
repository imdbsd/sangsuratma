import { Response } from 'express'
import { Request } from '../Penyalin'
import ingkelScrapper from '../../Scrapper/DayScrapper/ingkelScrapper'

const penyalinIngkel = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const ingkel = await ingkelScrapper(dayParams)
    if (!ingkel)
      throw new Error(
        `Cannot find ingkel for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ ingkel })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinIngkel

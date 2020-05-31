import { Response } from 'express'
import { Request } from '../Penyalin'
import uripScrapper from '../../Scrapper/DayScrapper/uripScrapper'

const penyalinUrip = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const urip = await uripScrapper(dayParams)
    if (!urip)
      throw new Error(
        `Cannot find urip for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ urip })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinUrip

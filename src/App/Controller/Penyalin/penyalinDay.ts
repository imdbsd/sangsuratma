import { Response } from 'express'
import { Request } from '../Penyalin'
import dayScrapper from '../../Scrapper/DayScrapper/dayScrapper'

const penyalinDay = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const day = await dayScrapper(dayParams)
    if (!day)
      throw new Error(`Cannot find day for query: ${JSON.stringify(dayParams)}`)
    return res.status(200).json(day)
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinDay

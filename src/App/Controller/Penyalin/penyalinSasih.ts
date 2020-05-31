import { Response } from 'express'
import { Request } from '../Penyalin'
import sasihScrapper from '../../Scrapper/DayScrapper/sasihScrapper'

const penyalinSasih = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const sasih = await sasihScrapper(dayParams)
    if (!sasih)
      throw new Error(
        `Cannot find sasih for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ sasih })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinSasih

import { Response } from 'express'
import { Request } from '../Penyalin'
import wewaranScrapper from '../../Scrapper/DayScrapper/wewaranScrapper'

const penyalinWewaran = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const wewaran = await wewaranScrapper(dayParams)
    if (!wewaran)
      throw new Error(
        `Cannot find wewaran for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json({ wewaran })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinWewaran

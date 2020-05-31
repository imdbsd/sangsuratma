import { Response } from 'express'
import { Request } from '../Penyalin'
import penanggalPangelongScrapper from '../../Scrapper/DayScrapper/penanggalPangelongScrapper'

const penyalinPenanggalPangelong = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const penanggalPangelong = await penanggalPangelongScrapper(dayParams)

    if (!penanggalPangelong)
      throw new Error(
        `Cannot find penanggal pangelong for query: ${JSON.stringify(
          dayParams
        )}`
      )
    return res.status(200).json({ penanggalPangelong })
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinPenanggalPangelong

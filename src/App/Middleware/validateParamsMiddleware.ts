import { Response } from 'express'
import { Request } from '../Controller/Penyalin'
import validateDayParams from '../Shared/Validator/validateDayParams'
import { parseDayParams } from '../Shared/Parser'

const validateParamsMiddleware = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const isValid = await validateDayParams(req.query)
    if (isValid) {
      req.dayParams = parseDayParams(req.query)
      next()
    }
  } catch (err) {
    console.log({ err })
    res.status(400).json({
      status: 'FAILED',
      error: err.message,
    })
  }
}

export default validateParamsMiddleware

import { Response } from 'express'
import { Request } from '../Controller/Penyalin'
import initValidator from '../Shared/Validator/validateDayParams'
import { parseDayParams } from '../Shared/Parser'

const pathThatAllowedWithoutDate = ['/events']

const validateParamsMiddleware = async (
  req: Request,
  res: Response,
  next: Function
) => {
  try {
    const canExcludeDate = !pathThatAllowedWithoutDate.includes(req.path)
    const validateDayParams = initValidator({
      requireDate: canExcludeDate,
    })
    const isValid = await validateDayParams(req.query)
    if (isValid) {
      req.dayParams = parseDayParams(req.query, canExcludeDate)
      next()
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    })
  }
}

export default validateParamsMiddleware

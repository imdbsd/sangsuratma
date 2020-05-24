import * as yup from 'yup'
import { DayScrapperParams } from '../../types'
import { parseDateNumber, parseMonth } from '../Parser'

type ValidateDayResponse = {
  isValid: boolean
  data?: DayScrapperParams
  error?: Error
}
type ValidateDayParams = (params: any) => Promise<ValidateDayResponse>

type ParamsShape = {
  date: string
  month: string
  year: string
}

const paramsSchema = yup.object().shape<ParamsShape>({
  date: yup
    .string()
    .required()
    .test('DateNumber-test', 'Invalid date', (date: string) => {
      const parsedDate = parseInt(date)
      if (isNaN(parsedDate)) return false

      if (parsedDate < 1 || parsedDate > 31) return false

      return true
    }),
  month: yup
    .string()
    .required()
    .test('MonthNumber-test', 'Invalid Month', (month: string) => {
      const parsedMonth = parseInt(month)
      if (isNaN(parsedMonth)) return false
      if (parsedMonth < 1 || parsedMonth > 12) return false
      return true
    }),
  year: yup
    .string()
    .required()
    .test('YearNumber-test', 'Invalid Year', (year: string) => {
      const parsedYear = parseInt(year)
      if (isNaN(parsedYear)) return false
      if (parsedYear < 1) return false
      return true
    }),
})

const parseParams = (params: ParamsShape): DayScrapperParams => ({
  date: parseDateNumber(params.date),
  month: parseMonth(params.month),
  year: parseInt(params.year),
})

const validateDayParams: ValidateDayParams = async (params) => {
  try {
    const validate = await paramsSchema.validate(params)
    const isValid = !!validate

    return {
      isValid,
      data: parseParams(params),
    }
  } catch (err) {
    return {
      isValid: false,
      error: new Error(err.message),
    }
  }
}

export default validateDayParams

import * as yup from 'yup'
import { parseMonth, parseDateNumber, DayParamsShape } from '../Parser'

type Options = { requireDate: boolean }
type ValidateDayParams = (options: Options) => (params: any) => Promise<boolean>

const paramsSchema = (options: Options) =>
  yup.object().shape<DayParamsShape>({
    ...(options.requireDate
      ? {
          date: yup
            .string()
            .required()
            .test('DateNumber-test', 'Invalid date', (date: string) => {
              const parsedDate = parseDateNumber(date)
              if (!parsedDate || parsedDate < 1 || parsedDate > 31) return false
              return true
            }),
        }
      : {}),
    month: yup
      .string()
      .required()
      .test('MonthNumber-test', 'Invalid Month', (month: string) => {
        const parsedMonth = parseMonth(month)
        if (!parsedMonth || parsedMonth < 1 || parsedMonth > 12) return false
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

const validateDayParams: ValidateDayParams = (options) => async (params) => {
  try {
    const validate = await paramsSchema({
      requireDate: options.requireDate || typeof params.date !== 'undefined',
    }).validate(params)
    const isValid = !!validate
    return isValid
  } catch (err) {
    throw new Error(err.message)
  }
}

export default validateDayParams

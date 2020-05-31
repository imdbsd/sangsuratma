import parseMonth from './parseMonth'
import parseDateNumber from './parseDateNumber'
import { DayScrapperParams } from '../../types'

export type DayParamsShape = {
  date?: string
  month: string
  year: string
}

const parseDayParams = (
  params: DayParamsShape,
  excludeDate: boolean
): DayScrapperParams => {
  const date = parseDateNumber(params.date)
  const month = parseMonth(params.month)
  if ((!date && !excludeDate) || !month) throw new Error('Cannot parse params')
  return {
    date,
    month,
    year: parseInt(params.year),
  }
}

export default parseDayParams

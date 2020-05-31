import parseMonth from './parseMonth'
import parseDateNumber from './parseDateNumber'
import { DayScrapperParams } from '../../types'

export type DayParamsShape = {
  date?: string
  month: string
  year: string
}

const parseDayParams = (params: DayParamsShape): DayScrapperParams => {
  const month = parseMonth(params.month)
  if (!params.date) {
    if (!month) throw new Error('Cannot parse params')
    return {
      month,
      year: parseInt(params.year),
    }
  }

  const date = parseDateNumber(params.date)
  if (!date || !month) throw new Error('Cannot parse params')
  return {
    date,
    month,
    year: parseInt(params.year),
  }
}

export default parseDayParams

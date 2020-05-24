import { Month } from '../../types'

const parseMonth = (month: any): Month => {
  const parsedMonth = parseInt(month)
  if (parsedMonth >= 1 && parsedMonth <= 12) return parsedMonth as Month
  throw new Error('Invalid Month')
}

export default parseMonth

import { Month } from '../../types'

const parseMonth = (month: any): Month => {
  const parsedMonth = parseInt(month)
  if (parsedMonth >= 1 && parsedMonth <= 12) return parsedMonth as Month
  throw new Error('Cannot parsed value to valid Month')
}

export default parseMonth

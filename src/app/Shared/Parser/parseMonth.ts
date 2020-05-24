import { Month } from '../../types'

const parseMonth = (month: any): Month | undefined => {
  const parsedMonth = parseInt(month)
  if (parsedMonth >= 1 && parsedMonth <= 12) return parsedMonth as Month
}

export default parseMonth

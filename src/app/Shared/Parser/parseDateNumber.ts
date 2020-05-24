import { DateNumber } from '../../types'

const parseDateNumber = (data: any): DateNumber => {
  const parsedData = parseInt(data)
  if (parsedData >= 1 && parsedData <= 31) {
    return parsedData as DateNumber
  }
  throw Error('Invalid Date')
}

export default parseDateNumber

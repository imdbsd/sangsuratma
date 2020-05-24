import { DateNumber } from '../../types'

const parseDateNumber = (data: any): DateNumber | undefined => {
  const parsedData = parseInt(data)
  if (parsedData >= 1 && parsedData <= 31) return parsedData as DateNumber
}

export default parseDateNumber

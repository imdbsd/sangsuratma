import { Bhatara } from '../../types'
import { isValidWuku } from '../utils'
import getBhatara from '../helpers/getBhatara'

const bhataraScrapper = (wuku: string): Promise<Bhatara> => {
  if (!isValidWuku(wuku)) throw new Error('Invalid Wuku')

  const bhatara = getBhatara(wuku)
  if (!bhatara) throw new Error('No Bhatara')

  return Promise.resolve(bhatara)
}

export default bhataraScrapper

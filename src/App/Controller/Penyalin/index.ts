import { Request as ExpressRequest } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { DayScrapperParams } from '../../types'

export type QueryString = {
  date: string
  year: string
  month: string
}

export type Request = ExpressRequest<
  ParamsDictionary,
  any,
  any,
  QueryString
> & {
  dayParams?: DayScrapperParams
}

export { default as penyalinUrip } from './penyalinUrip'
export { default as penyalinWuku } from './penyalinWuku'
export { default as penyalinSasih } from './penyalinSasih'
export { default as penyalinIngkel } from './penyalinIngkel'
export { default as penyalinBhatara } from './penyalinBhatara'
export { default as penyalinWewaran } from './penyalinWewaran'
export { default as penyalinPenanggalPangelong } from './penyalinPenanggalPangelong'

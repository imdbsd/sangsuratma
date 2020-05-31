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

export { default as penyalinWuku } from './penyalinWuku'

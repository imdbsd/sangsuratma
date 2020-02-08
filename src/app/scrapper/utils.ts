import {
  BalineseDayName,
  BahasaDayName,
  EnglishDayName,
  MonthEnglishName,
  MonthBahasaName,
  Wuku,
  Ekawara,
  Dwiwara,
  Triwara,
  Caturwara,
  Saptawara,
  Sasih,
  PenanggalPangelonStatus,
} from '../types'
import {
  wuku as wukuList,
  ekawara as ekawaraList,
  dwiwara as dwiwaraList,
  triwara as triwaraList,
  caturwara as caturwaraList,
  saptawara as saptawaraList,
  sasih as sasihList,
} from '../constants'

export const getBalineseDayName = (day: number): BalineseDayName | null => {
  switch (day) {
    case 0:
      return 'Redite'
    case 1:
      return 'Soma'
    case 2:
      return 'Anggara'
    case 3:
      return 'Buda'
    case 4:
      return 'Wraspati'
    case 5:
      return 'Sukra'
    case 6:
      return 'Saniscara'
    default:
      return null
  }
}

export const getBahasaDayName = (day: number): BahasaDayName | null => {
  switch (day) {
    case 0:
      return 'Minggu'
    case 1:
      return 'Senin'
    case 2:
      return 'Selasa'
    case 3:
      return 'Rabu'
    case 4:
      return 'Kamis'
    case 5:
      return 'Jumat'
    case 6:
      return 'Sabtu'
    default:
      return null
  }
}

export const getEnglishDayName = (day: number): EnglishDayName | null => {
  switch (day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return null
  }
}

export const getEnglishMonthName = (month: number): MonthEnglishName | null => {
  switch (month) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      return null
  }
}

export const getBahasaMonthName = (month: number): MonthBahasaName | null => {
  switch (month) {
    case 1:
      return 'Januari'
    case 2:
      return 'Februari'
    case 3:
      return 'Maret'
    case 4:
      return 'April'
    case 5:
      return 'Mei'
    case 6:
      return 'Juni'
    case 7:
      return 'Juli'
    case 8:
      return 'Agustus'
    case 9:
      return 'September'
    case 10:
      return 'Oktober'
    case 11:
      return 'Nopember'
    case 12:
      return 'Desember'
    default:
      return null
  }
}

export const isValidWuku = (wuku: string): wuku is Wuku =>
  wukuList.includes(wuku as Wuku)

export const isValidEkawara = (ekawara: string): ekawara is Ekawara =>
  ekawaraList.includes(ekawara as Ekawara)

export const isValidDwiwara = (dwiwara: string): dwiwara is Dwiwara =>
  dwiwaraList.includes(dwiwara as Dwiwara)

export const isValidSaptawara = (saptawara: string): saptawara is Saptawara =>
  saptawaraList.includes(saptawara as Saptawara)

export const isValidTriwara = (triwara: string): triwara is Triwara =>
  triwaraList.includes(triwara as Triwara)

export const isValidCaturwara = (caturwara: string): caturwara is Caturwara =>
  caturwaraList.includes(caturwara as Caturwara)

export const isValidSasih = (sasih: string): sasih is Sasih =>
  sasihList.includes(sasih as Sasih)

export const getPenanggalPangelongStatus = (
  status: string
): PenanggalPangelonStatus | null => {
  if (status.indexOf('red') !== -1) return 'Penanggal'
  else if (status.indexOf('black') !== -1) return 'Pangelong'
  return null
}

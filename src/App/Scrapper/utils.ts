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
  Pancawara,
  Sadwara,
  Saptawara,
  Astawara,
  Sangawara,
  Dasawara,
  Sasih,
  Ingkel,
  PenanggalPangelongStatus,
} from '../types'
import {
  wuku as wukuList,
  ekawara as ekawaraList,
  dwiwara as dwiwaraList,
  triwara as triwaraList,
  caturwara as caturwaraList,
  pancawara as pancawaraList,
  sadwara as sadwaraList,
  saptawara as saptawaraList,
  astawara as astawaraList,
  sangawara as sangawaraList,
  dasawara as dasawaraList,
  sasih as sasihList,
  ingkel as ingkelList,
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

export const isValidTriwara = (triwara: string): triwara is Triwara =>
  triwaraList.includes(triwara as Triwara)

export const isValidCaturwara = (caturwara: string): caturwara is Caturwara =>
  caturwaraList.includes(caturwara as Caturwara)

export const isValidPancawara = (pancawara: string): pancawara is Pancawara =>
  pancawaraList.includes(pancawara as Pancawara)

export const isValidSadwara = (sadwara: string): sadwara is Sadwara =>
  sadwaraList.includes(sadwara as Sadwara)

export const isValidSaptawara = (saptawara: string): saptawara is Saptawara =>
  saptawaraList.includes(saptawara as Saptawara)

export const isValidAstawara = (astawara: string): astawara is Astawara =>
  astawaraList.includes(astawara as Astawara)

const MAP_INVALID_SANGAWARA: { [key: string]: Sangawara } = {
  Urukung: 'Urungan',
}
export const isValidSangawara = (sangawara: string): sangawara is Sangawara => {
  if (
    sangawaraList.includes(sangawara as Sangawara) ||
    typeof MAP_INVALID_SANGAWARA[sangawara] !== 'undefined'
  ) {
    return true
  }
  return false
}

export const validateSangawaraValue = (sangawara: Sangawara): Sangawara => {
  const val = MAP_INVALID_SANGAWARA[sangawara]
  if (val) {
    return val
  }
  return sangawara
}

export const isValidDasawara = (dasawara: string): dasawara is Dasawara =>
  dasawaraList.includes(dasawara as Dasawara)

export const isValidSasih = (sasih: string): sasih is Sasih =>
  sasihList.includes(sasih as Sasih)

export const isValidIngkel = (ingkel: string): ingkel is Ingkel =>
  ingkelList.includes(ingkel as Ingkel)

export const getPenanggalPangelongStatus = (
  status: string
): PenanggalPangelongStatus | null => {
  if (status.indexOf('red') !== -1) return 'Penanggal'
  else if (status.indexOf('black') !== -1) return 'Pangelong'
  return null
}

// the year  in masehi were caka year equal to 0
const theFirstCakaMasehiYear = 78

export const getCakaYears = (masehi: number): number => {
  return masehi - theFirstCakaMasehiYear
}

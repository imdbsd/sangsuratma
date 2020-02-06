export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type DateNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31

export type BalineseDayName =
  | 'Redite'
  | 'Soma'
  | 'Anggara'
  | 'Buda'
  | 'Wraspati'
  | 'Sukra'
  | 'Saniscara'

export type BahasaDayName =
  | 'Senin'
  | 'Selasa'
  | 'Rabu'
  | 'Kamis'
  | 'Jumat'
  | 'Sabtu'
  | 'Minggu'

export type EnglishDayName =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'

export type MonthEnglishName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type MonthBahasaName =
  | 'Januari'
  | 'Februari'
  | 'Maret'
  | 'April'
  | 'Mei'
  | 'Juni'
  | 'Juli'
  | 'Agustus'
  | 'September'
  | 'Oktober'
  | 'Nopember'
  | 'Desember'

export type EventType =
  | 'rerainan'
  | 'hari peringatan'
  | 'hari raya agama'
  | 'piodalan'

export type PenanggalPangelonStatus = 'Penanggal' | 'Pangelong'
export type Wuku =
  | 'Sinta'
  | 'Landep'
  | 'Ukir'
  | 'Kulantir'
  | 'Tolu'
  | 'Gumbreg'
  | 'Wariga'
  | 'Warigadean'
  | 'Julungwangi'
  | 'Sungsang'
  | 'Dungulan'
  | 'Kuningan'
  | 'Langkir'
  | 'Medangsia'
  | 'Pujut'
  | 'Pahang'
  | 'Krulut'
  | 'Merakih'
  | 'Tambir'
  | 'Medangkungan'
  | 'Matal'
  | 'Uye'
  | 'Menail'
  | 'Prangbakat'
  | 'Bala'
  | 'Ugu'
  | 'Wayang'
  | 'Klawu'
  | 'Dukut'
  | 'Watugunung'

export type Ingkel = 'Wong' | 'Sato' | 'Mina' | 'Manuk' | 'Taru' | 'Buku'
export type Sasih =
  | 'Kasa'
  | 'Karo'
  | 'Katiga'
  | 'Kapat'
  | 'Kalima'
  | 'Kanem'
  | 'Kapitu'
  | 'Kawolu'
  | 'Kasanga'
  | 'Kadasa'
  | 'Jiestha'
  | 'Sadha'

export type Ekawara = 'Luang'
export type Dwiwara = 'Menga' | 'Pepet'
export type Triwara = 'Pasah' | 'Beteng' | 'Kajeng'
export type Caturwara = 'Sri' | 'Laba' | 'Jaya' | 'Menala'
export type Pancawara = 'Umanis' | 'Paing' | 'Pon' | 'Wage' | 'Kliwon'
export type Sadwara =
  | 'Tungleh'
  | 'Aryang'
  | 'Urukung'
  | 'Paniron'
  | 'Was'
  | 'Maulu'
export type Saptawara =
  | 'Redite'
  | 'Soma'
  | 'Anggara'
  | 'Buda'
  | 'Wraspati'
  | 'Sukra'
  | 'Saniscara'
export type Astawara =
  | 'Sri'
  | 'Indra'
  | 'Guru'
  | 'Yama'
  | 'Ludra'
  | 'Brahma'
  | 'Kala'
  | 'Uma'
export type Sangawara =
  | 'Dangu'
  | 'Jangur'
  | 'Gigis'
  | 'Nohan'
  | 'Ogan'
  | 'Erangan'
  | 'Urungan'
  | 'Tulus'
  | 'Dadi'
export type Dasawara =
  | 'Pandita'
  | 'Pati'
  | 'Suka'
  | 'Duka'
  | 'Sri'
  | 'Manuh'
  | 'Manusa'
  | 'Raja'
  | 'Dewa'
  | 'Raksasa'

export type Event = {
  timestamp: string
  eventName: string
  eventType: EventType | null
}
export type EventScrapperParams = { month: Month; year: number }
export type EventScrapper = (
  params: EventScrapperParams
) => Promise<Event[] | null>

export type Day = {
  timestamp: string
  date: DateNumber
  day_name: {
    balinese: BalineseDayName | null
    bahasa: BahasaDayName | null
    english: EnglishDayName | null
  }
  month: {
    index: Month | null
    english: MonthEnglishName | null
    bahasa: MonthBahasaName | null
  }
  year: {
    masehi: number | null
    caka: number | null
  }
  wewaran: {
    ekawara: Ekawara | null
    dwiwara: Dwiwara | null
    triwara: Triwara | null
    caturwara: Caturwara | null
    pancawara: Pancawara | null
    sadwara: Sadwara | null
    saptawara: Saptawara | null
    astawara: Astawara | null
    sangawara: Sangawara | null
    dasawara: Dasawara | null
  }
  penanggal_pangelong: {
    status: PenanggalPangelonStatus | null
    value: number | null
  }
  wuku: Wuku | null
  ingkel: Ingkel | null
  sasih: Sasih | null
  urip: string | null
}

export type DayScrapperParams = { date: DateNumber; month: Month; year: number }
export type DayScrapper = (params: DayScrapperParams) => Promise<Day | null>

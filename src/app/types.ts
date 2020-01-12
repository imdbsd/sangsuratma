export type EventType =
  | 'rerainan'
  | 'hari peringatan'
  | 'hari raya agama'
  | 'piodalan'

export type Event = {
  timestamp: string
  eventName: string
  eventType: EventType | null
}
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type EventScrapperParams = { month: Month; year: number }
export type EventScrapper = (
  params: EventScrapperParams
) => Promise<Event[] | null>

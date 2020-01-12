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

export type EventScrapperParams = { month: number; year: number }
export type EventScrapper = (
  params: EventScrapperParams
) => Promise<Event[] | null>

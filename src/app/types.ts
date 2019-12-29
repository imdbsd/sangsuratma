export type Event = {
  timestamp: string
  eventName: string
  eventType: string
}

export type EventScrapperParams = { month: number; year: number }
export type EventScrapper = (
  params: EventScrapperParams
) => Promise<Event[] | null>

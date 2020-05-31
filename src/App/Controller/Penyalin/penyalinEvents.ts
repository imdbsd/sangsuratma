import { Response } from 'express'
import { Request } from '.'
import eventScrapper from '../../Scrapper/eventScrapper'
import { EventScrapperParams } from '../../types'

const penyalinEvents = async (req: Request, res: Response) => {
  const { dayParams } = req
  try {
    if (!dayParams) throw new Error('Invalid parameters')
    const eventParams: EventScrapperParams = {
      month: dayParams.month,
      year: dayParams.year,
    }
    const events = await eventScrapper(eventParams)
    if (!events)
      throw new Error(
        `Cannot find events for query: ${JSON.stringify(dayParams)}`
      )

    if (!dayParams.date) return res.status(200).json(events)

    const now = new Date()
    now.setTime(0)
    now.setDate(dayParams.date)
    now.setMonth(dayParams.month - 1)
    now.setFullYear(dayParams.year)

    const filteredEvents = events.filter(
      (event) => event.timestamp === now.toISOString()
    )
    if (filteredEvents.length === 0)
      throw new Error(
        `Cannot find events for query: ${JSON.stringify(dayParams)}`
      )
    return res.status(200).json(filteredEvents)
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    })
  }
}

export default penyalinEvents

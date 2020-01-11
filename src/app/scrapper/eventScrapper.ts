import axios from 'axios'
import cheerio from 'cheerio'
import { Event, EventScrapper } from '../types'

const COLUMN_RERAINAN = 'right-column-1'
const COLUMN_HARI_PERINGATAN = 'right-column-2'
const COLUMN_HARI_RAYA_AGAMA = 'right-column-3'
const COLUMN_PIODALAN = 'right-column-4'

const RERAINAN = 'rerainan'
const HARI_PERINGATAN = 'hari peringatan'
const HARI_RAYA_AGAMA = 'hari raya agama'
const PIODALAN = 'piodalan'

const eventScrapper: EventScrapper = async params => {
  try {
    const { data: html } = await axios(
      `http://www.kalenderbali.info/?month${params.month}=$&year=${params.year}&submit=Tampilkan`
    )

    const now = new Date()
    now.setTime(0)
    now.setMonth(params.month - 1)
    now.setFullYear(params.year)

    const $ = cheerio.load(html)
    const events: Event[] = []
    $(`div[id^='right-column'] .box tr`).each((_, el) => {
      if ($(el).find('img').length !== 0) {
        return false
      }

      let date: string | number = $(el)
        .find('td')
        .first()
        .text()

      date = parseInt(date)

      if (isNaN(date)) {
        return false
      }
      now.setDate(date)

      const eventTemplate: Event = {
        timestamp: now.toISOString(),
        eventName: '',
        eventType: '',
      }

      const columnParent = $(el)
        .parent()
        .parent()
        .parent()
        .parent()
      const id = $(columnParent).attr('id')
      if (!id) {
        return false
      }

      if (id === COLUMN_RERAINAN) {
        eventTemplate.eventType = RERAINAN
      } else if (id === COLUMN_HARI_PERINGATAN) {
        eventTemplate.eventType = HARI_PERINGATAN
      } else if (id === COLUMN_HARI_RAYA_AGAMA) {
        eventTemplate.eventType = HARI_RAYA_AGAMA
      } else if (id === COLUMN_PIODALAN) {
        eventTemplate.eventType = PIODALAN
      }

      const eventsNow = $(el)
        .children('td')
        .last()
        .text()
        .split(';')

      eventsNow.forEach(event => {
        events.push({
          ...eventTemplate,
          eventName: event.trim(),
        })
      })
    })

    return events
  } catch (e) {
    console.log(e)
    return null
  }
}

export default eventScrapper

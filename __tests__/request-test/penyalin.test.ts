import request from 'supertest'
import app from '../../src/App/app'
import {
  queryString,
  DAY_22_JANUARY_2020,
  EVENT_15_JANUARY_2020,
} from '../constants'

describe('API requests test', () => {
  beforeEach(() => {
    jest.setTimeout(10000)
  })
  test('Request wuku from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/wuku?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      wuku: DAY_22_JANUARY_2020.wuku,
    })
  })

  test('Request sasih from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/sasih?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      sasih: DAY_22_JANUARY_2020.sasih,
    })
  })

  test('Request ingkel from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/ingkel?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      ingkel: DAY_22_JANUARY_2020.ingkel,
    })
  })

  test('Request bhatara from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/bhatara?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      bhatara: DAY_22_JANUARY_2020.bhatara,
    })
  })

  test('Request urip from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/urip?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      urip: DAY_22_JANUARY_2020.urip,
    })
  })

  test('Request wewaran from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/wewaran?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      wewaran: DAY_22_JANUARY_2020.wewaran,
    })
  })

  test('Request penanggal pangelong from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/penanggal-pangelong?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      penanggalPangelong: DAY_22_JANUARY_2020.penanggal_pangelong,
    })
  })

  test('Request day data from 22 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/day?${queryString['22_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual(DAY_22_JANUARY_2020)
  })

  test('Request events from 15 Januari 2020', async () => {
    const res = await request(app).get(
      `/penyalin/events?${queryString['15_JANUARY_2020']}`
    )

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual(EVENT_15_JANUARY_2020)
  })
})

import request from 'supertest'
import app from '../../src/App/app'
import { queryString, DAY_22_JANUARY_2020 } from '../constants'

describe('API requests test', () => {
  test('Request wuku from 22 Januari 2020', async () => {
    const res = await request(app).get(`/penyalin/wuku?${queryString}`)

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      wuku: DAY_22_JANUARY_2020.wuku,
    })
  })

  test('Request sasih from 22 Januari 2020', async () => {
    const res = await request(app).get(`/penyalin/sasih?${queryString}`)

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      sasih: DAY_22_JANUARY_2020.sasih,
    })
  })

  test('Request ingkel from 22 Januari 2020', async () => {
    const res = await request(app).get(`/penyalin/ingkel?${queryString}`)

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      ingkel: DAY_22_JANUARY_2020.ingkel,
    })
  })

  test('Request bhatara from 22 Januari 2020', async () => {
    const res = await request(app).get(`/penyalin/bhatara?${queryString}`)

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      bhatara: DAY_22_JANUARY_2020.bhatara,
    })
  })
})

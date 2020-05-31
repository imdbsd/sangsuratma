import request from 'supertest'
import app from '../../src/App/app'
import { queryString, DAY_22_JANUARY_2020 } from '../constants'

describe('Test requets', () => {
  test('Request wuku from 22 Januari 2020', async () => {
    const res = await request(app).get(`/penyalin/wuku?${queryString}`)

    expect(res.status).toBe(200)
    expect(res.header['content-type']).toContain('application/json')
    expect(res.body).toStrictEqual({
      wuku: DAY_22_JANUARY_2020.wuku,
    })
  })
})

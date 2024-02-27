import request from 'supertest'
import {Express} from 'express-serve-static-core'

import {createServer} from '../../../server'

let server: Express

beforeAll(async () => {
  server = await createServer()
})

describe('GET /cards/', () => {
  it('responds with \'All\'', async () => {
    let res = await request(server).get('/cards/')
    await expect(res.status).toBe(200)
    await expect(res.text).toBe('all cards')
  })
})
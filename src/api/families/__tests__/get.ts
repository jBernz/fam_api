import request from 'supertest'
import {Express} from 'express-serve-static-core'

import {createServer} from '../../../server'

let server: Express

beforeAll(async () => {
  server = await createServer()
})

describe('GET /card_classes/', () => {
  it('responds with \'All\'', async () => {
    let res = await request(server).get('/card_classes/')
    await expect(res.status).toBe(200)
  })
})
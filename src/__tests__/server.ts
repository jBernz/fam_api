import request from 'supertest'
import {Express} from 'express-serve-static-core'
import { Router } from 'express'
import sinon from 'ts-sinon'

import {createServer} from '../server'

describe('createServer', () => {

  let server: Express

  afterEach(async () => {
    const httpServer = server.listen(process.env.PORT, () => {})
    httpServer.close()
  })

  it('creates a server that responds with \'Healthy\'', async () => {
    server = createServer({})
    let res = await request(server).get('/health')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Healthy')
  })

  it('accepts routers', async () => {
    const mockGet = sinon.spy((_,res)=>{
      res.send('')
    })
    const router = Router()
    router.get('/', mockGet)

    server = createServer({'/path': router})

    const res = await request(server).get('/path/')
    expect(mockGet.calledOnce).toBe(true)
    expect(res.status).toBe(200)
  })
})
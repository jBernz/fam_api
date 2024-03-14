import request from 'supertest'
import express from 'express'
import sinon from 'ts-sinon'

import DefaultRouter from '../default.router'

describe('DefaultRouter', () => {

  const mockPath = '/path'

  describe('getAll', () => {

    const mockDocuments = [{a:'A'},{a:'B'}]
    let spy, mockService, res, server

    beforeAll(async () => {
      server = express()
      spy = sinon.spy(()=>mockDocuments)
      mockService = { getAllDocuments: spy }
      server.use(mockPath, DefaultRouter(mockService))
      res = await request(server).get(`${mockPath}/`)
    })

    it('returns a 200', async () => {
      expect(res.status).toBe(200)
    })
    it('calls getAllDocuments', async () => {
      expect(spy.called).toBe(true)
    })
    it('returns the result', async () => {
      const expected = JSON.stringify(mockDocuments)
      const actual = JSON.stringify(res.body)
      expect(actual).toBe(expected)
    })

    afterAll(async () => {
      const httpServer = server.listen(process.env.PORT, () => {})
      httpServer.close()
    })
  })

  describe('post', () => {

    const mockPayload = {a:'A'}
    const mockDocument = {a:'B'}
    let mockService, res, server

    beforeAll(async () => {
      server = express()
      server.use(express.json())
      mockService = { 
        createDocument: ()=>{},
        updateDocument: ()=>{},
        postDocument: (_,__)=>(_)=>mockDocument
      }
      server.use(mockPath, DefaultRouter(mockService))
      res = await request(server).post(`${mockPath}/`).send(mockPayload)
    })

    it('returns a 200', async () => {
      expect(res.status).toBe(200)
    })

    //TODO add sinon stub to see passed body

    it('returns the result', async () => {
      const expected = JSON.stringify(mockDocument)
      const actual = JSON.stringify(res.body)
      expect(actual).toBe(expected)
    })
    
    afterAll(async () => {
      const httpServer = server.listen(process.env.PORT, () => {})
      httpServer.close()
    })
  })

  describe('deleteOne', () => {

    const mockId = '123'
    let mockService, res, server

    beforeAll(async () => {
      server = express()
      mockService = { deleteDocument: ()=>{} }
      server.use(mockPath, DefaultRouter(mockService))
      res = await request(server).delete(`${mockPath}/${mockId}`)
    })

    it('returns a 200', async () => {
      expect(res.status).toBe(200)
    })

    //TODO add sinon stub to see passed id
    
    afterAll(async () => {
      const httpServer = server.listen(process.env.PORT, () => {})
      httpServer.close()
    })
  })

})
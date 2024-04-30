import { getModelForClass, prop } from '@typegoose/typegoose'
import { connectDB, disconnectDB, dropDB } from '../../database'
import { DefaultService } from '../default.service'
import sinon from 'ts-sinon'

//TODO add actual mocked models

class Mock {
  @prop()
  public a: string; 
}
const MockModel = getModelForClass(Mock)
const service = DefaultService(MockModel)
const mockData = [{a:'A'},{a:'B'},{a:'C'}]

beforeAll(async () => {
  await connectDB()
})

afterEach(async () => {
  await dropDB()
})

afterAll(async () => {
  await disconnectDB()
})

describe('DefaultService', () => {

  describe('getAllDocuments', () => {
    beforeEach(async () => {
      await MockModel.create(mockData)
    })
    it('getsAllDocuments', async () => {
      const documents = await service.getAllDocuments()
      expect(documents.length).toEqual(mockData.length)
    })
  })

  describe('createDocument', () => {
    it('returns a document', async () => {
      const document = {a:'D'}
      const savedDocument = await service.createDocument(document)
      expect(savedDocument.a).toEqual(document.a)
    })
    it('returns a document with a valid _id', async () => {
      const document = {_id: '$phID1', a:'D'}
      const savedDocument = await service.createDocument(document)
      expect(savedDocument._id).toBeDefined()
      expect(savedDocument._id).not.toBe(document._id)
    })
    it('adds document to the db', async () => {
      const savedDocument = await service.createDocument({a:'D'})
      const actual = JSON.stringify(await MockModel.findOne(savedDocument).exec())
      const expected = JSON.stringify(savedDocument)
      expect(actual).toEqual(expected)
    })
  })

  describe('updateDocument', () => {
    beforeEach(async () => {
      await MockModel.create(mockData)
    })
    it('updates a document', async () => {
      const document = await MockModel.findOne({a:'A'}).exec()
      document.a = 'D'
      const savedDocument = await service.updateDocument(document)
      const actual = JSON.stringify(savedDocument)
      const expected = JSON.stringify(document)
      expect(actual).toEqual(expected)
    })
  })

  describe('postDocument', () => {
    it('calls create document if passed invalid _id', async () => {
      const document = {_id: '$phID', a: 'A'}
      const createDocument = sinon.spy()
      await service.postDocument(createDocument,service.updateDocument)(document)
      expect(createDocument.calledOnceWith(document))
    })
    it('calls create document if passed undefined _id', async () => {
      const document = {a: 'A'}
      const createDocument = sinon.spy()
      await service.postDocument(createDocument,service.updateDocument)(document)
      expect(createDocument.calledOnceWith(document))
    })
    it('calls update document if passed a valid id', async () => {
      const document = {_id: '$phID', a: 'A'}
      const updateDocument = sinon.spy()
      await service.postDocument(service.createDocument,updateDocument)(document)
      expect(updateDocument.calledOnceWith(document))
    })
  })

  describe('deleteDocument', () => {
    beforeEach(async () => {
      await MockModel.create(mockData)
    })
    it('deletes a document', async () => {
      const document = await MockModel.findOne({a:'A'}).exec()
      await service.deleteDocument(document)
      const foundDoc = await MockModel.findById(document.id).exec()
      expect(foundDoc).toEqual(null)
    })
  })
})
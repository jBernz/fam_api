import { CardModel } from '../../data/card.model'
import { connectDB, disconnectDB, dropDB } from '../../database'
import sinon from 'ts-sinon'
import { CardService } from '../card.service'

const mockData = [
  {name: 'A'},
  {name: 'B'}
]

beforeAll(async () => {
  await connectDB()
})

afterEach(async () => {
  await dropDB()
})

afterAll(async () => {
  await disconnectDB()
})

describe('CardService', () => {

  describe('getAllCards', () => {
    beforeEach(async () => {
      await CardModel.create(mockData)
    })
    it('gets all cards and populates them', async () => {
      const cards = await CardService.getAllCards()
      expect(false).toEqual(true)
    })
  })

  describe('postCard', () => {
    it('posts a CardModel of the corresponding Type', async () => {
      const card = {_id: '$phID', a: 'A'}
      const postDocument = sinon.spy()
      await CardService.postCard(card)
      expect(false).toEqual(true)
    })
  })
})
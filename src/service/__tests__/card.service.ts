import { CardModel, FeatureCardModel } from '../../data/card.model'
import { connectDB, disconnectDB, dropDB } from '../../database'
import { CardService } from '../card.service'
import { FamilyModel } from '../../data/family.model'
import { TagModel } from '../../data/tag.model'
import { CardType } from 'fam-types'

const mockCard = {
  name: 'a',
  memory: 0
}

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

  describe('getAllDocuments', () => {
    it('gets all cards and populates them with families', async () => {
      const mockFamily = {name: 'family'}
      await FamilyModel.create(mockFamily)
      const savedFamily = await FamilyModel.findOne(mockFamily).exec()

      const cards = [
        {...mockCard, family: savedFamily._id}
      ]
      await CardModel.create(cards)

      const savedCards = await CardService.getAllDocuments()
      const actual = JSON.stringify(savedCards[0].family)
      const expected = JSON.stringify(savedFamily)
      expect(actual).toEqual(expected)
    })
    it('gets all cards and populates them with tags', async () => {
      const mockTag = {name: 'tag'}
      await TagModel.create(mockTag)
      const savedTag = await TagModel.findOne(mockTag).exec()

      const cards = [
        {...mockCard, tags: [savedTag._id]}
      ]
      await CardModel.create(cards)

      const savedCards = await CardService.getAllDocuments()
      const actual = JSON.stringify(savedCards[0].tags[0])
      const expected = JSON.stringify(savedTag)
      expect(actual).toEqual(expected)
    })
  })

  describe('postDocument', () => {
    it('saves a card model of the corresponding type', async () => {
      const card = {...mockCard, type: CardType.Feature}
      await CardService.postDocument(card)
      const count = await FeatureCardModel.countDocuments()
      expect(count).toEqual(1)
    })
  })
})
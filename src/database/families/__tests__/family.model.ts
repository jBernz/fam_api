import { connectDB, disconnectDB } from "../../database"
import { FamilyModel } from "../family.model"

beforeAll(async () => {
  await connectDB()
})

afterAll(async () => {
  await disconnectDB()
})

describe('CardClassModel', () => {
  it('can be created', async () => {
    const name = "FakeClassName"
    const description = "FakeClass Description"

    const doc = await FamilyModel.create({name, description})

    const fetched = await FamilyModel.findById(doc._id)

    expect(fetched).not.toBeNull()
    expect(fetched!.name).toBe(name)
    expect(fetched!.description).toBe(description)
  })
})
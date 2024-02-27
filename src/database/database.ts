import Mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

import cardsJson from '../../data/cards.json'
import cardClassesJson from '../../data/card_classes.json'
import { CardModel } from "./creatures/creature.model"
import { FamilyModel } from "./families/family.model"

let database: Mongoose.Connection

export const connectDB = async () => {

  let uri

  console.log(process.env.MONGO_URI)

  if(process.env.MONGO_URI === 'in_memory'){
    const mongod = await MongoMemoryServer.create()
    uri = mongod.getUri()
  } else {
    uri = process.env.MONGO_URI
  }
 
  if (database) {
    return
  }
  try{
    await Mongoose.connect(uri)
  } catch(e) {
    console.log(e)
  }

  console.log('Connected to database')
  database = Mongoose.connection
  

  //await database.db.dropDatabase()
  // console.log("Repopulating data...")
  // await createData()
  // console.log("Repopulated data")

}

export const disconnectDB = () => {  
  if (!database) {
    return
  }  
  Mongoose.disconnect()
}

const createData = async () => {

  // for (let card of cardsJson) {
  //   await CardModel.create(card)
  // }
  // for (let cardClass of cardClassesJson) {
  //   await CardClassModel.create(cardClass)
  // }

}
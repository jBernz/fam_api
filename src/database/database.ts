import Mongoose from "mongoose"
import cardsJson from '../../data/cards.json'
import cardClassesJson from '../../data/card_classes.json'
import { CardModel } from "./creatures/creature.model"
import { CardClassModel } from "./card_class/card_class.model"

let database: Mongoose.Connection

export const connectDB = () => {

  const uri = process.env.MONGO_URI
 
  if (database) {
    return
  }

  Mongoose.connect(uri)
  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database")
    await database.db.dropDatabase()
    console.log("Repopulating data...")
    await createData()
    console.log("Repopulated data")
  })

  database.on("error", () => {
    console.log("Error connecting to database")
  })

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
import { connectDB } from "./database"
import dotenv from "dotenv"
import {createServer} from './server'
import DefaultRouter from "./api/default.router"
import { FamilyModel } from "./data/family.model"
import { TagModel } from "./data/tag.model"
import { CardService } from "./service/card.service"
import { DefaultService } from "./service/default.service"
import { CardModel } from "./data/card.model"

dotenv.config()

const port = process.env.PORT

const routers = {
  '/families': DefaultRouter(DefaultService(FamilyModel)),
  '/tags': DefaultRouter(DefaultService(TagModel)),
  '/cards': DefaultRouter(CardService)
}

console.log(CardModel.discriminators)

connectDB()
  .then( () => createServer(routers))
  .then(server => {
    server.listen(port, () => {
      console.info(`Listening on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.error(`Error: ${err}`)
  })
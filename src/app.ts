import { connectDB } from "./database"
import dotenv from "dotenv"
import {createServer} from './server'

dotenv.config()

const port = process.env.PORT
connectDB()
  .then( () => createServer())
  .then(server => {
    server.listen(port, () => {
      console.info(`Listening on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.error(`Error: ${err}`)
  })
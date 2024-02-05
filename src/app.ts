import express from "express"
import { connectDB } from "./database/database"
import dotenv from "dotenv"
import {createServer} from './server'

dotenv.config()

const port = process.env.PORT

createServer()
  .then(server => {
    server.listen(port, () => {
      console.info(`Listening on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.error(`Error: ${err}`)
  })
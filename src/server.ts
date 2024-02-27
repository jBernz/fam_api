import express from 'express'
import cors from 'cors'
import {Express} from 'express-serve-static-core'
import familes from "./api/families/router"
import cards from "./api/cards/router"
import tags from "./api/tags/router"

export async function createServer(): Promise<Express> {
  const server = express()
  server.use(express.json())
  server.use(cors())
  server.use('/families', familes)
  server.use('/cards', cards)
  server.use('/tags', tags)
  server.get('/health', (req, res) => {
    res.send('Healthy')
  })
  return server
}
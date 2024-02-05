import express from 'express'
import {Express} from 'express-serve-static-core'

import cards from "./api/cards/router"

export async function createServer(): Promise<Express> {
  const server = express()
  server.use('/cards', cards)
  server.get('/health', (req, res) => {
    res.send('Healthy')
  })
  return server
}
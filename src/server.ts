import express, { Router } from 'express'
import cors from 'cors'

export function createServer(routers: {[key:string]: Router}){
  const server = express()
  server.use(express.json())
  server.use(cors())

  for (let path of Object.keys(routers)){
    server.use(path, routers[path])
  }

  server.get('/health', (req, res) => {
    res.send('Healthy')
  })
  return server
}
import { createServer } from 'http'
import { AddressInfo } from 'net'
import express from 'express'
import router from './router'

const app = express()
const server = createServer(app)

app.use(router())

server.listen(3000, () => {
  const { port } = server.address() as AddressInfo

  // eslint-disable-next-line no-console
  console.log(`server running on ${port}`)
})

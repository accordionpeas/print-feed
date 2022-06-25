import 'dotenv/config'
import { createServer } from 'http'
import express from 'express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import router from './router'
import typeDefs from './schema'
import resolvers from './resolvers'

const start = async () => {
  const app = express()
  const httpServer = createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  server.applyMiddleware({ app })

  app.use(router())
  app.use(express.static('build/public'))

  app.listen({ port: 3000 }, () => {
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
  })
}

start()

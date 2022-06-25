import { gql } from 'apollo-server'

export default gql`
  type Print {
    id: String!
    title: String!
    description: String!
    imageUrl: String!
  }

  type Feed {
    page: Int!
    prints: [Print!]
  }

  type Query {
    feed(page: Int): Feed!
  }
`

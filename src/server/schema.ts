import { gql } from 'apollo-server'

export default gql`
  type Print {
    id: String
    title: String
    description: String
    imageUrl: String
  }

  type Query {
    prints: [Print]
  }
`

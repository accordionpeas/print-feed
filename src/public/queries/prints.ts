import { gql } from '@apollo/client'

export interface IPrint {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface IPrintData {
  prints: IPrint[]
}

export default gql`
  query Prints {
    prints {
      id
      title
      description
      imageUrl
    }
  }
`

import { gql } from '@apollo/client'

export interface IPrint {
  id: string
  title: string
  description: string
  imageUrl: string
}

export interface IFeedData {
  feed: {
    prints: IPrint[]
    page: number
  }
}

export interface IFeedVariables {
  page: number
}

export default gql`
  query Feed($page: Int) {
    feed(page: $page) {
      prints {
        id
        title
        description
        imageUrl
      }
      page
    }
  }
`

import fetch from 'cross-fetch'
import { IPrint, IFeedVariables, IFeedData } from '../../public/queries/feed'

interface ResponseData {
  records: {
    id: string
    title: string
    primaryimageurl: string
    description: string
  }[]
}

const apiPath = 'https://api.harvardartmuseums.org/object'

export default {
  Query: {
    feed: async (_parent: any, args: IFeedVariables): Promise<IFeedData['feed']> => {
      const url = `${apiPath}?classification=Prints&apikey=${process.env.HARVARD_ART_API_KEY}&page=${args.page}`

      const response = await fetch(url)
      const data: ResponseData = await response.json()

      const prints: IPrint[] = data.records.map(({ id, title, primaryimageurl, description }) => ({
        id,
        title,
        description: description ?? '',
        imageUrl: primaryimageurl ?? '',
      }))

      return {
        page: args.page,
        prints,
      }
    },
  },
}

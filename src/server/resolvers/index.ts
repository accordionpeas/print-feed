import fetch from '../utils/fetch'
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
      const { page } = args

      const data: ResponseData = await fetch(apiPath, {
        classification: 'Prints',
        apikey: process.env.HARVARD_ART_API_KEY,
        size: 10,
        sort: 'rank',
        sortorder: 'desc',
        hasimage: 1,
        q: 'verificationlevel: 4',
        page,
      })

      const prints: IPrint[] = data.records.map(({ id, title, primaryimageurl, description }) => ({
        id,
        title,
        description: description ?? '',
        imageUrl: primaryimageurl ?? '',
      }))

      return {
        page,
        prints,
      }
    },
  },
}

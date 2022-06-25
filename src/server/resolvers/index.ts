import fetch from 'cross-fetch'
import qs from 'qs'
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

      const query = qs.stringify({
        classification: 'Prints',
        apikey: process.env.HARVARD_ART_API_KEY,
        size: 10,
        sort: 'rank',
        sortorder: 'desc',
        hasimage: 1,
        q: 'verificationlevel: 4',
        page,
      })

      const url = `${apiPath}?${query}`

      const response = await fetch(url)

      const data: ResponseData = await response.json()

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

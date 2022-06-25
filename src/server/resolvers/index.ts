import fetch from 'cross-fetch'
import { IPrint } from '../../public/queries/prints'

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
    prints: async () => {
      const url = `${apiPath}?classification=Prints&apikey=${process.env.HARVARD_ART_API_KEY}`
      const response = await fetch(url)
      const data: ResponseData = await response.json()

      const prints: IPrint[] = data.records.map(({ id, title, primaryimageurl, description }) => ({
        id,
        title,
        description,
        imageUrl: primaryimageurl,
      }))

      return prints
    },
  },
}

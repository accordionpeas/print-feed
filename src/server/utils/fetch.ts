import fs from 'fs'
import path from 'path'
import fetch from 'cross-fetch'
import qs from 'qs'

type Query = {
  [key: string]: any
}

export default async (urlPath: string, query: Query) => {
  // when testing we mock the network request
  if (process.env.ENV === 'test') {
    const filePath = path.resolve(process.cwd(), `cypress/fixtures/api-response-${query.page}.json`)
    const mockJSON = await fs.promises.readFile(filePath, { encoding: 'utf-8' })

    return JSON.parse(mockJSON)
  }

  const queryString = qs.stringify(query)

  const url = `${urlPath}?${queryString}`

  const response = await fetch(url)

  return response.json()
}

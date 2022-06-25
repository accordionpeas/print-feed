import { Request, Response } from 'express'
import renderPage from '../utils/render-page'

export default async (_req: Request, res: Response) => {
  const html = renderPage()
  res.send(html)
}

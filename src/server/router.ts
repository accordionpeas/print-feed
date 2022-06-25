import { Router } from 'express'
import homePageController from './controllers/pages/home'

export default () => {
  const router = Router()

  return router.get('/', homePageController)
}

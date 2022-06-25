import { Router } from 'express'
import homePageController from './controllers/home'

export default () => {
  const router = Router()

  return router.get('/', homePageController)
}

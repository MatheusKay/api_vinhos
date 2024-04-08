import { Router } from 'express'

import { getWines } from './controllers/UseController.js'

const routes = Router()

routes.get('/vinhos', getWines)

export default routes
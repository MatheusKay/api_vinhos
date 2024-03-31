import { Router } from 'express'

import { getWines, postWine, deleteWine } from './controllers/UseController.js'

const routes = Router()

routes.get('/vinhos', getWines)
routes.post('/vinhos', postWine)
routes.delete('/vinhos/:id', deleteWine)

export default routes
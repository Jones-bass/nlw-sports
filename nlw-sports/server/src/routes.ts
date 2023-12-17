import { Router } from 'express'

import { FindGameController } from './useCases/findGameController'
import { ListAdsByGameIdController } from './useCases/listAdsByGameIdController'

const routes = Router()

const findGameController = new FindGameController()
const listAdsByGameIdController = new ListAdsByGameIdController()

routes.get('/games', findGameController.handle)
routes.get('/games/:id/ads', listAdsByGameIdController.handle)

export { routes }

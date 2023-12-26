import { Router } from 'express'

import { FindGameController } from './useCases/findGameController'
import { ListAdsByGameIdController } from './useCases/listAdsByGameIdController'
import { ListDiscordsController } from './useCases/listDiscordsController'
import { CreateGameIdController } from './useCases/createGameIdController'

const routes = Router()

const findGameController = new FindGameController()
const listAdsByGameIdController = new ListAdsByGameIdController()
const listDiscordsController = new ListDiscordsController()
const createGameIdController = new CreateGameIdController()

routes.get('/games', findGameController.handle)
routes.get('/games/:id/ads', listAdsByGameIdController.handle)
routes.get('/games/:id/discords', listDiscordsController.handle)
routes.post('/games/:id/ads', createGameIdController.handle)

export { routes }

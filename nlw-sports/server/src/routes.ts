import { Router } from 'express'

import { FindGameController } from './useCases/findGameController'
import { ListAdsByGameIdController } from './useCases/listAdsByGameIdController'
import { ListDiscordsController } from './useCases/listDiscordsController'

const routes = Router()

const findGameController = new FindGameController()
const listAdsByGameIdController = new ListAdsByGameIdController()
const listDiscordsController = new ListDiscordsController()

routes.get('/games', findGameController.handle)
routes.get('/games/:id/ads', listAdsByGameIdController.handle)
routes.get('/games/:id/discords', listDiscordsController.handle)

export { routes }

import { Router } from 'express'

import { FindGameController } from './useCases/findGameController'

const routes = Router()

const findGameController = new FindGameController()

routes.get('/games', findGameController.handle)

export { routes }

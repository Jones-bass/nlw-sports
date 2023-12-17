import { Request, Response } from 'express'

import { ListAdsByGameIdUseCase } from './listAdsByGameIdUseCase'

export class ListAdsByGameIdController {
  async handle(request: Request, response: Response) {
    const listAdsByGameIdUseCase = new ListAdsByGameIdUseCase()

    const gameId = request.params.id

    const games = await listAdsByGameIdUseCase.execute(gameId)

    return response.json(games)
  }
}

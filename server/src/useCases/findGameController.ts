import { Request, Response } from 'express'

import { FindGameUseCase } from './findGameUseCase'

export class FindGameController {
  async handle(request: Request, response: Response) {
    const findGameUseCase = new FindGameUseCase()

    const games = await findGameUseCase.execute()

    return response.json(games)
  }
}

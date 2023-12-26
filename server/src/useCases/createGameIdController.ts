import { Request, Response } from 'express'

import { CreateAdInput, CreateGameIdUseCase } from './createGameIdUseCase'

export class CreateGameIdController {
  async handle(request: Request, response: Response) {
    const createGameIdUseCase = new CreateGameIdUseCase()

    const gameId = request.params.id

    const data: CreateAdInput = {
      gameId,
      name: request.body.name,
      yearsPlaying: request.body.yearsPlaying,
      discord: request.body.discord,
      weekDays: request.body.weekDays,
      hourStart: request.body.hourStart,
      hourEnd: request.body.hourEnd,
      useVoiceChannel: request.body.useVoiceChannel,
    }

    const games = await createGameIdUseCase.execute(data)

    return response.json(games)
  }
}

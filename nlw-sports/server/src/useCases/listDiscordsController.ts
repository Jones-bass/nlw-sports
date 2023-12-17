import { Request, Response } from 'express'

import { ListDiscordsUseCase } from './listDiscordsUseCase'

export class ListDiscordsController {
  async handle(request: Request, response: Response) {
    const listDiscordsUseCase = new ListDiscordsUseCase()

    const adId = request.params.id

    const discordInfo = await listDiscordsUseCase.execute(adId)

    return response.json({ discord: discordInfo })
  }
}

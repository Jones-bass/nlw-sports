import { prisma } from '../database/prismaClient'

export class FindGameUseCase {
  async execute() {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    })

    return games
  }
}

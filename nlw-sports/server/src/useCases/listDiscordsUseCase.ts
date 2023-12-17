import { prisma } from '../database/prismaClient'

export class ListDiscordsUseCase {
  async execute(adId: string) {
    const ad = await prisma.ad.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adId,
      },
    })

    return ad.discord
  }
}

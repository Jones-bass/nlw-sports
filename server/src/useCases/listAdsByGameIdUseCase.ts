import { prisma } from '../database/prismaClient'
import { convertMinutesToHourString } from '../utils/convert-minutes-to-hour-string'

export class ListAdsByGameIdUseCase {
  async execute(gameId: string) {
    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd),
    }))
  }
}

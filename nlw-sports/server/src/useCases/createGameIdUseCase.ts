import { prisma } from '../database/prismaClient'
import { convertHourStringToMinutes } from '../utils/convert-hour-string-to-minutes'

export interface CreateAdInput {
  gameId: string
  name: string
  yearsPlaying: number
  discord: string
  weekDays: string[]
  hourStart: string
  hourEnd: string
  useVoiceChannel: boolean
}

export class CreateGameIdUseCase {
  async execute(data: CreateAdInput) {
    const {
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel,
    } = data

    const ad = await prisma.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays: weekDays.join(','),
        hourStart: convertHourStringToMinutes(hourStart),
        hourEnd: convertHourStringToMinutes(hourEnd),
        useVoiceChannel,
      },
    })

    return ad
  }
}

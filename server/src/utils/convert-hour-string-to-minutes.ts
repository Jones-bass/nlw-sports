export function convertHourStringToMinutes(hourString: string): number {
  const [hour, minutes] = hourString.split(':').map(Number)

  const minutesAmount = hour * 60 + minutes

  return minutesAmount
}

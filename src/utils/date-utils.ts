export class DateUtils {
  static secondsToTime(seconds: number) {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0')
    const totalSeconds = seconds % 3600
    const i = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0')
    const s = (totalSeconds % 60).toString().padStart(2, '0')
    return `${h}:${i}:${s}`
  }
}

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

  static getDate(date: Date) {
    if (date instanceof Date) {
      const day = date.getDate().toString().padStart(2, '0'),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        year = date.getFullYear(),
        h = date.getHours().toString().padStart(2, '0'),
        i = date.getMinutes().toString().padStart(2, '0'),
        s = date.getSeconds().toString().padStart(2, '0')
      return `${day}/${month}/${year} ${h}:${i}:${s}`
    }
    return ''
  }
}

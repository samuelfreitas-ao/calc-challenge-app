type Params = {
  array: any[]
  fieldToOrder?: string
  order: 'asc' | 'desc'
}
export class ArrayUtils {
  static sort<T = any>({ array, fieldToOrder, order }: Params): T {
    if (!array || array.length < 1) return [] as T
    if (!fieldToOrder) {
      return [...array].sort((a, b) => {
        switch (order) {
          case 'asc':
            return a.localeCompare(b)
            if (a > b) return 1
            if (a < b) return -1
            return 0
          default:
            if (a > b) return -1
            if (a < b) return 1
            return 0
        }
      }) as T
    }

    return [...array].sort((a, b) => {
      switch (order) {
        case 'asc':
          return b[fieldToOrder].localeCompare(a[fieldToOrder])
        // if (a[fieldToOrder] > b[fieldToOrder]) return 1
        // if (a[fieldToOrder] < b[fieldToOrder]) return -1
        // return 0
        default:
          return a[fieldToOrder].localeCompare(b[fieldToOrder])
        // if (a[fieldToOrder] > b[fieldToOrder]) return -1
        // if (a[fieldToOrder] < b[fieldToOrder]) return 1
        // return 0
      }
    }) as T
  }
}

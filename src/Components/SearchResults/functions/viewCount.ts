export const viewCount = (viewCount: string) => {
    const count: number = Number(viewCount)
    if (count > 999999) {
        return `${Math.floor(count / 1000000)} млн. просмотров`
    } else if (count > 999) {
        return `${Math.floor(count / 1000)} тыс. просмотров`
    } else {
        return `${count} просмотров`
    }
}
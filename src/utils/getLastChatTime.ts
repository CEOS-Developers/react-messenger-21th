import { formatTime } from './format'

const getDateYMD = (date: Date): [number, number, number] => [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
]

const getLastChatTime = (timestamp: number) => {
  const [todayY, todayM, todayD] = getDateYMD(new Date())
  const [year, month, date] = getDateYMD(new Date(timestamp))

  if (todayD === date && todayM === month && todayY === year)
    return formatTime(timestamp)
  else {
    const [yesterY, yesterM, yesterD] = getDateYMD(
      new Date(todayY, todayM, todayD - 1)
    )
    if (yesterD === date && yesterM === month && yesterY === year) return '어제'
    else return `${month + 1}월 ${date}일`
  }
}

export default getLastChatTime

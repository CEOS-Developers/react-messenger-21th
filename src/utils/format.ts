/* YYYY년 M월 D일 D요일 */
const formatDate = (date: string): string => {
  const dateObj = new Date(date)
  const validDateObj = isNaN(dateObj.getTime())
    ? new Date(date.replace(/-/g, '/')) // Safari Invalid Date 오류 처리
    : dateObj

  const formattedDate = validDateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  return formattedDate
}

/* 오전or오후 H시 M분 */
const formatTime = (time: number): string => {
  const dateObj = new Date(time)
  const formattedTime = dateObj.toLocaleString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  return formattedTime
}

/* YYYY-MM-DD */
const formatDateForData = (dateObj: Date): string => {
  const year = dateObj.getFullYear()
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0')
  const dd = String(dateObj.getDate()).padStart(2, '0')

  return `${year}-${mm}-${dd}`
}

export { formatDate, formatTime, formatDateForData }

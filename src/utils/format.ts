const formatDate = (date: string): string => {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  return formattedDate
}

const formatTime = (time: number): string => {
  const dateObj = new Date(time)
  const formattedTime = dateObj.toLocaleString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  return formattedTime
}

export { formatDate, formatTime }

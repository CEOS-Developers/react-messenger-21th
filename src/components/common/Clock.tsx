import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const formatTime = `${time.getHours() % 12 || 12}:${time
    .getMinutes()
    .toString()
    .padStart(2, '0')}`

  return <div>{formatTime}</div>
}

export default Clock

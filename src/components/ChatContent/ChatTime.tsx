import { formatTime } from '@/utils/format'

const ChatTime = ({ timestamp }: { timestamp: number }) => {
  return (
    <div className="font-ChatTime text-gray09 whitespace-nowrap">
      {formatTime(timestamp)}
    </div>
  )
}

export default ChatTime

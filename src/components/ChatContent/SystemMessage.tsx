import { formatTime } from '@/utils/format'

const SystemMessage = ({
  timestamp,
  content,
}: {
  timestamp: number
  content: string
}) => {
  return (
    <div className="system-message text-gray09 font-Caption-m border-gray07 mb-5 w-fit max-w-[335px] flex-col rounded text-center break-words whitespace-normal">
      <p>{formatTime(timestamp)}</p>
      <p>{content}</p>
    </div>
  )
}

export default SystemMessage

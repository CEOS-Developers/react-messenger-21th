import { formatDate } from '@/utils/format'

const ChatDate = ({ date, dateIdx }: { date: string; dateIdx: number }) => {
  const mg = dateIdx === 0 ? 'mt-4 mb-6' : 'mt-1 mb-5'
  return (
    <div
      className={`system-message text-gray09 font-Caption-m border-gray07 flex-center h-[25px] w-fit max-w-36 min-w-[138px] rounded ${mg}`}>
      {formatDate(date)}
    </div>
  )
}

export default ChatDate

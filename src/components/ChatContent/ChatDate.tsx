import { formatDate } from '@/utils/format'

const ChatDate = ({ date, dateIdx }: { date: string; dateIdx: number }) => {
  const mg = dateIdx === 0 ? 'mt-4 mb-6' : 'mt-6 mb-5'
  return (
    <div
      className={`text-gray09 font-Caption-m border-gray07 flex-center mx-auto h-[25px] max-w-36 min-w-[138px] rounded px-2 whitespace-nowrap ${mg}`}>
      {formatDate(date)}
    </div>
  )
}

export default ChatDate

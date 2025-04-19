import { useLocation, useNavigate } from 'react-router'
import Back from '@/assets/Icons/AppBar/back.svg?react'
import getRoomName from '@/utils/getRoomName'

const ChatTitle = ({ memberIds }: { memberIds: number[] }) => {
  const nav = useNavigate()
  const { roomName, memberCount } = useLocation().state ?? {}
  const isGroupChat = memberCount > 2

  return (
    <div className="flex items-center">
      <div className="cursor-pointer" onClick={() => nav('/chatList')}>
        <Back width={24} />
      </div>
      <h1 className="font-Headline3 ellipsis max-w-[189px] pr-1.5 pl-2">
        {roomName || getRoomName(memberIds)}
      </h1>
      <span className="font-Subhead-m text-gray10">
        {isGroupChat ? memberCount : null}
      </span>
    </div>
  )
}

export default ChatTitle

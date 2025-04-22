import { useNavigate } from 'react-router'
import { MultipleProfile } from '@/assets/Icons/Profile'
import findUser from '@/utils/findUser'
import { ChatRoom } from '@/interface/ChatRoom'

const GroupChatItem = ({
  chatRoomId,
  member,
  roomName,
}: Omit<ChatRoom, 'chats'>) => {
  const nav = useNavigate()

  const memberColors = member
    .slice(0, 4)
    .map((memberId: number) => findUser(memberId)?.profileColor || 'gray02')
  const memberCount = member.length
  return (
    <div
      className="flex cursor-pointer flex-col"
      onClick={() =>
        nav(`/room/${chatRoomId}`, {
          state: {
            member,
            roomName,
            memberCount,
          },
        })
      }>
      <div className="flex items-center gap-3 py-2.5">
        <MultipleProfile colors={memberColors} />
        <div className="font-Body-1-b flex gap-1">
          <p>{roomName}</p>
          <p>({memberCount})</p>
        </div>
      </div>
      <div className="partition"></div>
    </div>
  )
}

export default GroupChatItem

import { useNavigate } from 'react-router'

import { MultipleProfile, ProfileCircleDefault } from '@/assets/Icons/Profile'

import { useUserStore } from '@/stores/useUserStore'
import { usePersistUserStore } from '@/stores/usePersistUserStore'
import { ChatRoom } from '@/interface/ChatRoom'
import { Chat } from '@/interface/Chat'

import getRoomName from '@/utils/getRoomName'
import getUnreadCount from '@/utils/getUnreadCount'
import getLastChatTime from '@/utils/getLastChatTime'

interface RoomItemProps extends ChatRoom {
  lastSeenTime: number
  lastChat: Chat
}

const RoomItem = ({
  chatRoomId,
  roomName,
  member,
  chats,
  lastSeenTime,
  lastChat,
}: RoomItemProps) => {
  const nav = useNavigate()
  const { user, updateLastSeenTime } = useUserStore()
  const { getUserById } = usePersistUserStore()

  const memberCount = member.length
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  const determinedRoomName = roomName ?? getRoomName(memberIds)

  const memberColors = memberIds
    .slice(0, 4)
    .map((memberId: number) => getUserById(memberId)?.profileColor || 'gray02')

  const lastChatTime = getLastChatTime(lastChat.id)
  const unreadCount = getUnreadCount(chats, lastSeenTime)

  const chatRoomClickHandler = () => {
    updateLastSeenTime(chatRoomId)

    return nav(`/room/${chatRoomId}`, {
      state: {
        roomName,
        member,
        memberCount,
      },
    })
  }

  return (
    <div className="h-[72px] cursor-pointer" onClick={chatRoomClickHandler}>
      <div className="flex gap-3">
        {memberCount === 2 ? (
          <ProfileCircleDefault color={memberColors[0]} />
        ) : (
          <MultipleProfile colors={memberColors} />
        )}

        <div className="border-b-gray04 flex flex-1 justify-between gap-1 pb-1.5">
          <div>
            <div className="font-Body-1-b flex gap-1">
              <p className="ellipsis max-w-[189px]">{determinedRoomName}</p>
              <p className="text-gray08">
                {memberCount > 2 ? memberCount : null}
              </p>
            </div>
            <p className="font-Body-2-r text-gray12 ellipsis-2 h-[42px] w-[224px]">
              {lastChat.content}
            </p>
          </div>
          <div className="font-Caption-m flex flex-col items-end gap-1.5">
            <p className="text-gray09 whitespace-nowrap">{lastChatTime}</p>
            {unreadCount > 0 ? (
              <div className="flex-center bg-gray11 h-[22px] w-[23px] rounded-[16.5px] text-white">
                {unreadCount}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomItem

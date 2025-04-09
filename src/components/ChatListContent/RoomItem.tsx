import { useNavigate } from 'react-router'

import * as s from './RoomItem.Styled'
import { MultipleProfile, ProfileDefault } from '../../assets/Icons/Profile'

import { useUserStore } from '../../stores/useUserStore'
import { ChatRoom } from '../../interface/ChatRoom'
import { Chat } from '../../interface/Chat'

import findUser from '../../utils/findUser'
import getRoomName from '../../utils/getRoomName'
import getUnreadCount from '../../utils/getUnreadCount'
import getLastChatTime from '../../utils/getLastChatTime'

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

  const memberCount = member.length
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  const determinedRoomName = roomName ?? getRoomName(memberIds)

  const memberColors = memberIds
    .slice(0, 4)
    .map((memberId: number) => findUser(memberId)?.profileColor || 'gray02')

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
    <s.Wapper onClick={chatRoomClickHandler}>
      <s.Container>
        {memberCount === 2 ? (
          <ProfileDefault color={memberColors[0]} />
        ) : (
          <MultipleProfile colors={memberColors} />
        )}

        <s.TextContainer>
          <div>
            <s.TitleContainer>
              <s.Name>{determinedRoomName}</s.Name>
              <s.MemCount>{memberCount > 2 ? memberCount : null}</s.MemCount>
            </s.TitleContainer>
            <s.Message $isR={true}>{lastChat.content}</s.Message>
          </div>
          <s.TimeContainer $isM={true}>
            <s.Time>{lastChatTime}</s.Time>
            {unreadCount > 0 ? (
              <s.BlackCircle>{unreadCount}</s.BlackCircle>
            ) : null}
          </s.TimeContainer>
        </s.TextContainer>
      </s.Container>
    </s.Wapper>
  )
}

export default RoomItem

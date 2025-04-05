import * as s from './RoomItem.Styled'
import { useNavigate } from 'react-router'
import { MultipleProfile, ProfileDefault } from '../../assets/Icons/Profile'
import { formatTime } from '../../utils/format'
import { userData } from '../../assets/data/user.json'
import { useUserStore } from '../../stores/useUserStore'
import { ChatRoom } from '../../interface/ChatRoom'
import getUnreadCount from '../../utils/getUnreadCount'

interface RoomItemProps extends ChatRoom {
  lastSeenTime: number
}

const RoomItem = ({
  chatRoomId,
  roomName,
  member,
  chats,
  lastSeenTime,
}: RoomItemProps) => {
  const nav = useNavigate()
  const { user } = useUserStore()
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  const determinedRoomName =
    roomName ??
    memberIds
      .map(
        (memberId: number) =>
          userData.find((user) => user.id === memberId)?.name || '알 수 없음'
      )
      .join(', ')

  const memberColors = memberIds
    .slice(0, 4)
    .map(
      (memberId: number) =>
        userData.find((user) => user.id === memberId)?.profileColor || 'gray02'
    )

  const lastChatKey = Object.keys(chats).slice(-1)[0]
  const lastChat = chats[lastChatKey][chats[lastChatKey].length - 1]

  const unreadCount = getUnreadCount(chats, lastSeenTime)
  return (
    <s.Wapper onClick={() => nav(`/room/${chatRoomId}`)}>
      <s.Container>
        {member.length === 2 ? (
          <ProfileDefault color={memberColors[0]} />
        ) : (
          <MultipleProfile colors={memberColors} />
        )}

        <s.TextContainer>
          <div>
            <s.TitleContainer>
              <s.Name>{determinedRoomName}</s.Name>
              <s.MemCount>
                {member.length > 2 ? member.length : null}
              </s.MemCount>
            </s.TitleContainer>
            <s.Message $isR={true}>{lastChat.content}</s.Message>
          </div>
          <s.TimeContainer $isM={true}>
            <s.Time>{formatTime(lastChat.id)}</s.Time>
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

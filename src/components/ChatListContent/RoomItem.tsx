import * as s from './RoomItem.Styled'
import { useNavigate } from 'react-router'
import { MultipleProfile, ProfileDefault } from '../../assets/Icons/Profile'
import { formatTime } from '../../utils/format'
import { userData } from '../../assets/data/user.json'
import { useUserStore } from '../../stores/useUserStore'
import { ChatRoom } from '../../interface/ChatRoom'
import getUnreadCount from '../../utils/getUnreadCount'
import getRoomName from '../../utils/getRoomName'
import getDateYMD from '../../utils/getDateYMD'

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
  const { user, updateLastSeenTime } = useUserStore()

  const memberCount = member.length
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  const determinedRoomName = roomName ?? getRoomName(memberIds)

  const memberColors = memberIds
    .slice(0, 4)
    .map(
      (memberId: number) =>
        userData.find((user) => user.id === memberId)?.profileColor || 'gray02'
    )

  const lastChatKey = Object.keys(chats).slice(-1)[0]
  const lastChat = chats[lastChatKey][chats[lastChatKey].length - 1]
  const getLastChatTime = (timestamp: number) => {
    const [todayY, todayM, todayD] = getDateYMD(new Date())
    const [year, month, date] = getDateYMD(new Date(timestamp))

    if (todayD === date && todayM === month && todayY === year)
      return formatTime(timestamp)
    else {
      const [yesterY, yesterM, yesterD] = getDateYMD(
        new Date(todayY, todayM, todayD - 1)
      )
      if (yesterD === date && yesterM === month && yesterY === year)
        return '어제'
      else return `${month + 1}월 ${date}일`
    }
  }

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
            <s.Time>{getLastChatTime(lastChat.id)}</s.Time>
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

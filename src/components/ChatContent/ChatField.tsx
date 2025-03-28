import { useState } from 'react'
import * as s from './ChatField.Styled'
import { ProfileMedium } from '../../assets/Icons/Profile'
import PeoplesMedium from '../../assets/Icons/Profile/Peoples-medium.svg?react'

const getFriendProfile = (color, name) => {
  return (
    <s.ProfileContainer>
      <ProfileMedium color={color}>
        <s.Icon>
          <PeoplesMedium />
        </s.Icon>
      </ProfileMedium>
      <s.Name $isM={true}>{name}</s.Name>
    </s.ProfileContainer>
  )
}

const ChatField = ({ myId, chats, member }) => {
  const [lastSender, setLastSender] = useState(null)
  const [lastSentTime, setLastSentTime] = useState(null)
  const dateChatPair = Object.entries(chats)

  const formatDate = (date: string): string => {
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })
    return formattedDate
  }

  const formatTime = (time: number): string => {
    const dateObj = new Date(time)
    const formattedTime = dateObj.toLocaleString('ko-KR', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return formattedTime
  }

  const determineLastSender = (sender: number): boolean => {
    const isLastSender = sender === lastSender
    setLastSender(sender)
    return isLastSender
  }

  const determineSentSameTime = (time: number): boolean => {
    const minuteTimestamp = Math.floor(time / 60000) //ms단위 타임스탬프 -> 분 단위 타임스탬프로 변환
    const isSentSameTime = minuteTimestamp === lastSentTime
    setLastSentTime(minuteTimestamp)
    return isSentSameTime
  }

  return (
    <s.ChatFieldWrapper>
      {dateChatPair.map(([date, chat]) => (
        <div>
          <s.DateDiv $isM={true}>{formatDate(date)}</s.DateDiv>
          {chat.map(({ id, content, sender }) => (
            <s.ChatDiv $isR={true} $isMe={sender === myId ? true : false}>
              <div>
                {formatTime(id)}, {sender}, {content}
              </div>
            </s.ChatDiv>
          ))}
        </div>
      ))}
    </s.ChatFieldWrapper>
  )
}

export default ChatField

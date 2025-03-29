import { useRef } from 'react'
import * as s from './ChatField.Styled'
import { ProfileMedium } from '../../assets/Icons/Profile'
import PeoplesMedium from '../../assets/Icons/Profile/Peoples-medium.svg?react'
import { formatDate, formatTime } from '../../utils/format'

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

const getDateDiv = (date: string, dateIdx: number) => {
  return dateIdx === 0 ? (
    <s.FirstDateDiv $isM={true}>{formatDate(date)}</s.FirstDateDiv>
  ) : (
    <s.DateDiv $isM={true}>{formatDate(date)}</s.DateDiv>
  )
}

const ChatField = ({ myId, chats, member }) => {
  const dateChatPair = Object.entries(chats)

  const lastSenderRef = useRef<number | null>(null)

  const determineLastSender = (sender: number): boolean => {
    const isLastSender = sender === lastSenderRef.current
    lastSenderRef.current = sender
    return isLastSender
  }

  const determineSentSameTime = (
    curTime: number,
    nextTime: number
  ): boolean => {
    const curMinuteTimestamp = Math.floor(curTime / 60000)
    const nextMinuteTimestamp = Math.floor(nextTime / 60000)
    return curMinuteTimestamp === nextMinuteTimestamp
  }

  return (
    <s.ChatFieldWrapper>
      {dateChatPair.map(([date, chat], dateIdx) => (
        <div key={date}>
          {getDateDiv(date, dateIdx)}
          {chat.map(({ id, content, sender }, chatIdx) => {
            const isMe = sender === myId //sender와 내 id가 같은가?
            const isLastSender = determineLastSender(sender)
            const isLastMessage = chatIdx === chat.length - 1
            const isNextSender =
              !isLastMessage && sender === chat[chatIdx + 1].sender
            const isSentSameTime =
              isNextSender && determineSentSameTime(id, chat[chatIdx + 1].id)
            const souldDisplayTime =
              isLastMessage || !isNextSender || !isSentSameTime
            return (
              <s.ChatContainer key={id}>
                {!isMe && isLastSender
                  ? null
                  : member[sender]
                  ? getFriendProfile(
                      member[sender].profileColor,
                      member[sender].name
                    )
                  : null}
                <s.ChatBubbleContainer
                  $isMe={isMe}
                  $souldDisplayTime={souldDisplayTime}>
                  {isMe && souldDisplayTime ? (
                    <s.TimeDiv>{formatTime(id)}</s.TimeDiv>
                  ) : null}
                  <s.ChatDiv $isR={true} $isMe={isMe}>
                    <div>{content}</div>
                  </s.ChatDiv>
                  {!isMe && souldDisplayTime ? (
                    <s.TimeDiv>{formatTime(id)}</s.TimeDiv>
                  ) : null}
                </s.ChatBubbleContainer>
              </s.ChatContainer>
            )
          })}
        </div>
      ))}
    </s.ChatFieldWrapper>
  )
}

export default ChatField

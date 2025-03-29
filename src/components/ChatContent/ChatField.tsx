import { useEffect, useRef } from 'react'

import * as s from './ChatField.Styled'
import { ProfileMedium } from '../../assets/Icons/Profile'
import PeoplesMedium from '../../assets/Icons/Profile/Peoples-medium.svg?react'

import { formatDate, formatTime } from '../../utils/format'
import { Chats } from '../../interface/ChatRoom'

const getFriendProfile = (color: string, name: string) => {
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

interface ChatFieldProps {
  myId: number
  chats: Chats
  member: Record<
    number,
    {
      name: string
      profileColor: string
    }
  >
}

const ChatField = ({ myId, chats, member }: ChatFieldProps) => {
  const dateChatPair = Object.entries(chats)

  const lastSenderRef = useRef<number | null>(null)
  const chatWrapperRef = useRef<HTMLDivElement | null>(null)

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

  /* 채팅 하단 스크롤 */
  useEffect(() => {
    if (chatWrapperRef.current)
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight
  }, [chats, myId])

  return (
    <s.ChatFieldWrapper ref={chatWrapperRef}>
      {dateChatPair.map(([date, chat], dateIdx) => (
        <div key={date}>
          {getDateDiv(date, dateIdx)}
          {chat.map(({ id, content, sender }, chatIdx: number) => {
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

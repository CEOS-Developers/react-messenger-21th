import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'

import * as s from './ChatField.Styled'

import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { Chat } from '@/interface/Chat'
import PartnerProfile from './PartnerProfile'
import ChatDate from './ChatDate'
import ChatTime from './ChatTime'

const ChatField = ({
  member,
}: {
  member: Record<
    number,
    {
      name: string
      profileColor: string
    }
  >
}) => {
  const { user } = useUserStore()
  const myId = user.id

  const { id } = useParams()
  const { chatRoom } = useChatRoomStore()
  const chats = chatRoom?.find((room) => room.chatRoomId === Number(id))?.chats

  const lastSenderRef = useRef<number | null>(null)
  const lastSentTimeRef = useRef<number | null>(null)
  const chatWrapperRef = useRef<HTMLDivElement | null>(null)

  /* 채팅 하단 스크롤 */
  useEffect(() => {
    if (chatWrapperRef.current)
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight
  }, [chats, myId])

  /* 채팅 내역이 없을 때 빈 화면 출력 */
  if (!chats) return <div className="flex-1"></div>

  const dateChatPair = Object.entries(chats)

  const determineLastSender = (sender: number): boolean => {
    const isLastSender = sender === lastSenderRef.current
    lastSenderRef.current = sender
    return isLastSender
  }

  const determineLastMsgSentSameTime = (curTime: number): boolean => {
    const curMinuteTimestamp = Math.floor(curTime / 60000)
    const isLastMsgSentSameTime = curMinuteTimestamp === lastSentTimeRef.current
    lastSentTimeRef.current = curMinuteTimestamp
    return isLastMsgSentSameTime
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
    <div className="scroll-container" ref={chatWrapperRef}>
      {dateChatPair.map(([date, chat], dateIdx) => (
        <div key={date}>
          {<ChatDate date={date} dateIdx={dateIdx} />}
          {chat.map(({ id, content, sender }: Chat, chatIdx: number) => {
            const isMe = sender === myId //sender와 내 id가 같은가?
            const isLastSender = determineLastSender(sender)
            const isLastMsgSentSameTime = determineLastMsgSentSameTime(id)
            const isLastMessage = chatIdx === chat.length - 1
            const isNextSender =
              !isLastMessage && sender === chat[chatIdx + 1].sender
            const isSentSameTime =
              isNextSender && determineSentSameTime(id, chat[chatIdx + 1].id)
            const souldDisplayTime =
              isLastMessage || !isNextSender || !isSentSameTime
            return (
              <s.ChatContainer key={id}>
                {!isMe && (!isLastSender || !isLastMsgSentSameTime) ? (
                  member[sender] ? (
                    <PartnerProfile
                      color={member[sender].profileColor}
                      name={member[sender].name}
                    />
                  ) : null
                ) : null}
                <s.ChatBubbleContainer
                  $isMe={isMe}
                  $needBigMargin={(!isMe || !isNextSender) && souldDisplayTime}
                  $isNextSender={isNextSender}>
                  {isMe && souldDisplayTime ? (
                    <ChatTime timestamp={id} />
                  ) : null}
                  <s.ChatDiv $isR={true} $isMe={isMe}>
                    <div>{content}</div>
                  </s.ChatDiv>
                  {!isMe && souldDisplayTime ? (
                    <ChatTime timestamp={id} />
                  ) : null}
                </s.ChatBubbleContainer>
              </s.ChatContainer>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default ChatField

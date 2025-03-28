import { useState } from 'react'
import * as s from './ChatField.Styled'

const ChatField = ({ myId, chats, member }) => {
  const [lastSender, setLastSender] = useState(null)
  const dateChatPair = Object.entries(chats)

  const formatDate = (date: string) => {
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })
    return formattedDate
  }

  const determineLastSender = (sender) => {
    const isLastSender = sender === lastSender
    setLastSender(sender)
    return isLastSender
  }

  return (
    <div>
      {dateChatPair.map(([date, chat]) => (
        <div>
          <s.DateDiv $isM={true}>{formatDate(date)}</s.DateDiv>
          {chat.map(({ id, content, sender }) => (
            <s.ChatDiv $isR={true} $isMe={sender === myId ? true : false}>
              {id}, {sender}, {content}
            </s.ChatDiv>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ChatField

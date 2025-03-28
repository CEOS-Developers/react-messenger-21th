import * as s from './ChatField.Styled'

const ChatField = ({ chats, member }) => {
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

  return (
    <div>
      {dateChatPair.map(([date, chat]) => (
        <div>
          <s.DateDiv $isM={true}>{formatDate(date)}</s.DateDiv>
          {chat.map(({ id, content, sender }) => (
            <div>
              {id}, {sender}, {content}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ChatField

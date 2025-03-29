import Back from '../../assets/Icons/Header/back.svg?react'
import * as s from './ChatTitle.Styled'

interface ChatTitleProps {
  roomName: string | null
  member: string[]
  handleClickMemberName: () => void
}

const ChatTitle = ({
  roomName,
  member,
  handleClickMemberName,
}: ChatTitleProps) => {
  return (
    <s.ChatTitleContainer>
      <Back />
      <s.ChatName onClick={handleClickMemberName}>
        {roomName ?? member.join(', ')}
      </s.ChatName>
      <s.MemberNum>{member.length > 1 ? member.length + 1 : ''}</s.MemberNum>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

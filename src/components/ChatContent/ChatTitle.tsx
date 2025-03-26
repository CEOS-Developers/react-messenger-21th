import Back from '../../assets/Icons/Header/back.svg?react'
import * as s from './ChatTitle.Styled'

const ChatTitle = ({ roomName, member }) => {
  //ChatMember.length > 1 ? member.length + 1 표시
  return (
    <s.ChatTitleContainer>
      <Back />
      <s.ChatName>{roomName}</s.ChatName>
      <s.MemberNum>{member.length > 1 ? member.length + 1 : ''}</s.MemberNum>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

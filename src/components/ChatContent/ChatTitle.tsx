import { useNavigate } from 'react-router'
import Back from '../../assets/Icons/Header/back.svg?react'
import * as s from './ChatTitle.Styled'
import { EventIcon } from '../common/Common.Styled'

const ChatTitle = ({
  roomName,
  memberCount,
  handleClickMemberName,
}: {
  roomName: string
  memberCount: number
  handleClickMemberName: () => void
}) => {
  const nav = useNavigate()
  return (
    <s.ChatTitleContainer>
      <EventIcon onClick={() => nav(-1)}>
        <Back />
      </EventIcon>
      <s.ChatName onClick={handleClickMemberName}>{roomName}</s.ChatName>
      <s.MemberNum>{memberCount > 2 ? memberCount : null}</s.MemberNum>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

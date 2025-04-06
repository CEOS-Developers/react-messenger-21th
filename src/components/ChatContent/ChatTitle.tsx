import { useLocation, useNavigate } from 'react-router'
import Back from '../../assets/Icons/Header/back.svg?react'
import * as s from './ChatTitle.Styled'
import { EventIcon } from '../common/Common.Styled'
import getRoomName from '../../utils/getRoomName'

const ChatTitle = ({
  memberIds,
  handleClickMemberName,
}: {
  memberIds: number[]
  handleClickMemberName: () => void
}) => {
  const nav = useNavigate()
  const { roomName, memberCount } = useLocation().state ?? {}

  return (
    <s.ChatTitleContainer>
      <EventIcon onClick={() => nav(-1)}>
        <Back />
      </EventIcon>
      <s.ChatName onClick={handleClickMemberName}>
        {roomName || getRoomName(memberIds)}
      </s.ChatName>
      <s.MemberNum>{memberCount > 2 ? memberCount : null}</s.MemberNum>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

import { useLocation, useNavigate } from 'react-router'

import * as s from './ChatTitle.Styled'
import { EventIcon } from '../common/Common.Styled'
import Back from '../../assets/Icons/Header/back.svg?react'

import getRoomName from '../../utils/getRoomName'

const ChatTitle = ({ memberIds }: { memberIds: number[] }) => {
  const nav = useNavigate()
  const { roomName, memberCount } = useLocation().state ?? {}
  const isGroupChat = memberCount > 2

  return (
    <s.ChatTitleContainer>
      <EventIcon onClick={() => nav('/chatList')}>
        <Back width={24} />
      </EventIcon>
      <s.ChatName>{roomName || getRoomName(memberIds)}</s.ChatName>
      <s.MemberNum>{isGroupChat ? memberCount : null}</s.MemberNum>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

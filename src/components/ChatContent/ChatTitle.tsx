import { useLocation, useNavigate } from 'react-router'

import * as s from './ChatTitle.Styled'
import { EventIcon } from '../common/Common.Styled'
import Back from '../../assets/Icons/Header/back.svg?react'

import getRoomName from '../../utils/getRoomName'
import setUserAndChatRoom from '../../utils/setUserAndChatRoom'

const ChatTitle = ({ memberIds }: { memberIds: number[] }) => {
  const nav = useNavigate()
  const { roomName, memberCount } = useLocation().state ?? {}
  const isGroupChat = memberCount > 2

  /* ChatTitle의 멤버의 이름을 클릭하면 사용자가 바뀌는 이벤트 */
  const handleClickRoomName = () => {
    if (!isGroupChat) return setUserAndChatRoom(memberIds[0])
  }

  return (
    <s.ChatTitleContainer>
      <EventIcon onClick={() => nav(-1)}>
        <Back />
      </EventIcon>
      <EventIcon>
        <s.ChatName onClick={handleClickRoomName}>
          {roomName || getRoomName(memberIds)}
        </s.ChatName>
        <s.MemberNum>{isGroupChat ? memberCount : null}</s.MemberNum>
      </EventIcon>
    </s.ChatTitleContainer>
  )
}

export default ChatTitle

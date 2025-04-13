import * as s from './ProfileAction.Styled'

import Edit from '@/assets/Icons/ProfileAction/edit.svg?react'
import Keep from '@/assets/Icons/ProfileAction/keep.svg?react'
import Star from '@/assets/Icons/ProfileAction/star.svg?react'

import Chat from '@/assets/Icons/ProfileAction/chat.svg?react'
import Phonecall from '@/assets/Icons/ProfileAction/phonecall.svg?react'
import Instagram from '@/assets/Icons/ProfileAction/instagram.svg?react'
import { EventIcon } from '../common/Common.Styled'
import { getRoomId } from '../../utils/getRoomId'
import { useNavigate } from 'react-router'
import { useUserStore } from '../../stores/useUserStore'
import { useChatRoomStore } from '../../stores/useChatRoomStore'

const MyProfleAction = () => {
  return (
    <s.Container>
      <Edit />
      <Star />
      <Keep />
    </s.Container>
  )
}
const FriendProfleAction = ({ snsUrl, id }: { snsUrl: string; id: number }) => {
  const nav = useNavigate()
  const { user } = useUserStore()
  const { chatRoomRef } = useChatRoomStore()

  const onClickChatIconHander = () => {
    let roomId = getRoomId(id)
    if (roomId === undefined) roomId = chatRoomRef
    return nav(`/room/${roomId}`, {
      state: {
        member: [user.id, id],
        memberCount: 2,
      },
    })
  }
  return (
    <s.Container>
      <EventIcon onClick={onClickChatIconHander}>
        <Chat />
      </EventIcon>
      <Phonecall />
      {snsUrl.trim() ? (
        <EventIcon>
          <a href={snsUrl} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </EventIcon>
      ) : (
        <Instagram />
      )}
    </s.Container>
  )
}

export { MyProfleAction, FriendProfleAction }

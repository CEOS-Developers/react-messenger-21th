import { useNavigate } from 'react-router'

import { getRoomId } from '@/utils/getRoomId'
import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'

import {
  Chat,
  Edit,
  Instagram,
  Keep,
  Phonecall,
  Star,
} from '@/assets/Icons/ProfileAction'

const MyProfleAction = () => {
  return (
    <div className="profile-action-container">
      <Edit />
      <Star />
      <Keep />
    </div>
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
    <div className="profile-action-container">
      <div className="cursor-pointer" onClick={onClickChatIconHander}>
        <Chat />
      </div>
      <Phonecall />
      {snsUrl.trim() ? (
        <div className="cursor-pointer">
          <a href={snsUrl} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </div>
      ) : (
        <Instagram />
      )}
    </div>
  )
}

export { MyProfleAction, FriendProfleAction }

import { useEffect, useState } from 'react'
import { Content } from '../common/Common.Styled'
import ContentHeader from '../common/ContentHeader'
import ChatTitle from './ChatTitle'
import TextInput from './TextInput'
import { ChatRoomIcon } from '../../assets/Icons/Header'
import { userData } from '../../assets/data/user.json'
import { chatRoomData } from '../../assets/data/chatRoom.json'
import { User } from '../../interface/User'
import { ChatRoom } from '../../interface/ChatRoom'
import ChatField from './ChatField'

const ROOM_ID = '550e8400-e29b-41d4-a716-446655440000'

const ChatContent = () => {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState<User | null>(null)
  const [room, setRoom] = useState<ChatRoom | null>(null)
  const s = { Content }

  useEffect(() => {
    const curUser = userData.find((user) => user.id === userId)
    setUser(curUser || null)

    const curRoom = chatRoomData.find((room) => room.chatRoomId === ROOM_ID)
    setRoom(curRoom || null)
  }, [])

  /* userId가 바뀌면 다시 user를 가져옴 */
  useEffect(() => {
    const curUser = userData.find((user) => user.id === userId)
    setUser(curUser)
  }, [userId])

  /* ChatTitle에 표시할 나를 제외한 채팅 참가자들의 이름을 가져옴 */
  const getChatPartnerName = () => {
    const memberId = room.member.filter((id: number) => id !== userId)
    return memberId.map(
      (id: number) => userData.find((user) => user.id === id)?.name
    )
  }

  /* ChatTitle의 멤버의 이름을 클릭하면 사용자가 바뀌는 이벤트 */
  const handleClickMemberName = () => {
    const memberId = room.member.filter((id: number) => id !== userId)
    setUserId(memberId[0])
  }

  /* 채팅 참가자 정보를 객체로 가져옴 */
  const getChatPartnerData = () => {
    const memberId = room.member.filter((id: number) => id !== userId)

    const partnerData = memberId.reduce((acc, id) => {
      const user = userData.find((user) => user.id === id)
      if (user) {
        acc[id] = {
          name: user.name,
          profileColor: user.profileColor,
        }
      }
      return acc
    }, {} as Record<number, { name: string; profileColor: string }>)
    return partnerData
  }

  if (!room || !user) return <div>Loading...</div>

  return (
    <s.Content>
      <ContentHeader
        leftChild={
          <ChatTitle
            roomName={room.roomName}
            member={getChatPartnerName()}
            handleClickMemberName={handleClickMemberName}
          />
        }
        rightChild={<ChatRoomIcon />}
      />
      <ChatField
        myId={userId}
        chats={room.chats}
        member={getChatPartnerData()}
      />
      <TextInput />
    </s.Content>
  )
}
export default ChatContent

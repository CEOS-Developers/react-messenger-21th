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

  useEffect(() => {
    const curUser = userData.find((user) => user.id === userId)
    setUser(curUser)
  }, [userId])

  const getMember = () => {
    const memberId = room.member.filter((id: number) => id !== userId)
    return memberId.map(
      (id: number) => userData.find((user) => user.id === id)?.name
    )
  }

  const handleClickMemberName = () => {
    const memberId = room.member.filter((id: number) => id !== userId)
    setUserId(memberId[0])
  }

  if (!room || !user) return <div>Loading...</div>

  return (
    <s.Content>
      <ContentHeader
        leftChild={
          <ChatTitle
            roomName={room.roomName}
            member={getMember()}
            handleClickMemberName={handleClickMemberName}
          />
        }
        rightChild={<ChatRoomIcon />}
      />
      <ChatField chats={room.chats} member={room.member} />
      <TextInput />
    </s.Content>
  )
}
export default ChatContent

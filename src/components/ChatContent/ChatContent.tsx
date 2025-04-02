import { useEffect, useState } from 'react'

import * as s from './ChatContent.Styled'
import ContentHeader from '../common/ContentHeader'
import ChatTitle from './ChatTitle'
import TextInput from './TextInput'
import ChatField from './ChatField'
import { ChatRoomIcon } from '../../assets/Icons/Header'

import { userData } from '../../assets/data/user.json'
import { chatRoomData } from '../../assets/data/chatRoom.json'

import { User } from '../../interface/User'
import { ChatRoom, Chats } from '../../interface/ChatRoom'
import { Chat } from '../../interface/Chat'

import { formatDateForData } from '../../utils/format'
import { useSetUserId, useUserId } from '../../contexts/UserIdContext'

const ROOM_ID = '550e8400-e29b-41d4-a716-446655440000'

const ChatContent = () => {
  const userId = useUserId()
  const setUserId = useSetUserId()
  const [user, setUser] = useState<User | null>(null)
  const [room, setRoom] = useState<ChatRoom | null>(null)
  const [chats, setChats] = useState<Chats | null>(null)

  useEffect(() => {
    const curUser = userData.find((user) => user.id === userId)
    setUser(curUser || null)

    const curRoom = chatRoomData.find((room) => room.chatRoomId === ROOM_ID)
    if (curRoom) {
      setRoom({
        ...curRoom,
        chats: Object.fromEntries(
          Object.entries(curRoom.chats).map(([date, messages]) => [
            date,
            messages ?? [],
          ])
        ),
      })
    } else {
      setRoom(null)
    }

    const savedChats = curRoom?.chats ?? {}
    setChats(savedChats || null)
  }, [])

  /* userId가 바뀌면 다시 user를 가져옴 */
  useEffect(() => {
    const curUser = userData.find((user) => user.id === userId)
    setUser(curUser || null)
  }, [userId])

  /* ChatTitle에 표시할 나를 제외한 채팅 참가자들의 이름을 가져옴 */
  const getChatPartnerName = () => {
    if (!room) return
    const memberId = room.member.filter((id: number) => id !== userId)
    return memberId.map(
      (id: number) =>
        userData.find((user) => user.id === id)?.name || '알 수 없음'
    )
  }

  /* ChatTitle의 멤버의 이름을 클릭하면 사용자가 바뀌는 이벤트 */
  const handleClickMemberName = () => {
    if (!room) return
    const memberId = room.member.filter((id: number) => id !== userId)
    setUserId(memberId[0])
  }

  /* 채팅 참가자 정보를 객체로 가져옴 */
  const getChatPartnerData = () => {
    if (!room) return
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

  const onSubmitChat = (input: string) => {
    if (!chats) return
    const date = new Date()
    const formattedDate = formatDateForData(date)

    const newChat: Chat = {
      id: date.getTime(),
      sender: userId,
      content: input,
    }

    setChats({
      ...chats,
      [formattedDate]: [...(chats[formattedDate] || []), newChat],
    })
  }

  if (!room || !user) return <div>Loading...</div>

  return (
    <s.ChatContentWrapper>
      <ContentHeader
        leftChild={
          <ChatTitle
            roomName={room.roomName}
            member={getChatPartnerName() || ['알 수 없음']}
            handleClickMemberName={handleClickMemberName}
          />
        }
        rightChild={<ChatRoomIcon />}
      />
      <ChatField
        myId={userId}
        chats={chats || {}}
        member={getChatPartnerData() || {}}
      />
      <TextInput onSubmit={onSubmitChat} />
    </s.ChatContentWrapper>
  )
}
export default ChatContent

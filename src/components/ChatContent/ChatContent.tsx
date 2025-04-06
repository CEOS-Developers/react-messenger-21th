import { useState } from 'react'

import * as s from './ChatContent.Styled'
import ContentHeader from '../common/ContentHeader'
import ChatTitle from './ChatTitle'
import TextInput from './TextInput'
import ChatField from './ChatField'
import { ChatRoomIcon } from '../../assets/Icons/Header'

import { userData } from '../../assets/data/user.json'

import { Chat } from '../../interface/Chat'

import { formatDateForData } from '../../utils/format'
import { useLocation } from 'react-router'
import { useUserStore } from '../../stores/useUserStore'

const ChatContent = () => {
  const { roomName, memberIds, memberCount, chatData } =
    useLocation().state ?? {}
  const { user, setUser } = useUserStore()
  const [chats, setChats] = useState(chatData)

  /* ChatTitle의 멤버의 이름을 클릭하면 사용자가 바뀌는 이벤트 */
  const handleClickMemberName = () => {
    const targetUser = userData.find((user) => user.id === memberIds[0])
    if (targetUser) setUser(targetUser)
  }

  /* 채팅 참가자 정보 객체 */
  const partnerData = memberIds.reduce(
    (
      acc: Record<number, { name: string; profileColor: string }>,
      id: number
    ) => {
      const user = userData.find((user) => user.id === id)
      if (user) {
        acc[id] = {
          name: user.name,
          profileColor: user.profileColor,
        }
      }
      return acc
    },
    {}
  )

  const onSubmitChat = (input: string) => {
    if (!chats) return
    const date = new Date()
    const formattedDate = formatDateForData(date)

    const newChat: Chat = {
      id: date.getTime(),
      sender: user.id,
      content: input,
    }

    setChats({
      ...chats,
      [formattedDate]: [...(chats[formattedDate] || []), newChat],
    })
  }

  return (
    <s.ChatContentWrapper>
      <ContentHeader
        leftChild={
          <ChatTitle
            roomName={roomName}
            memberCount={memberCount}
            handleClickMemberName={handleClickMemberName}
          />
        }
        rightChild={<ChatRoomIcon />}
      />
      <ChatField myId={user.id} chats={chats} member={partnerData} />
      <TextInput onSubmit={onSubmitChat} />
    </s.ChatContentWrapper>
  )
}
export default ChatContent

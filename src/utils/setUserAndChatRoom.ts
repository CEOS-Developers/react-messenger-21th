import { defaultUser } from '../assets/data/defaultUser'
import { chatRoomData } from '../assets/data/chatRoom.json'
import { ChatRoom as ChatRoomType } from '../interface/ChatRoom'
import { useUserStore } from '../stores/useUserStore'
import { useChatRoomStore } from '../stores/useChatRoomStore'
import { usePersistUserStore } from '@/stores/usePersistUserStore'

const setUserAndChatRoom = (userId: number) => {
  const userObj =
    usePersistUserStore.getState().getUserById(userId) ?? defaultUser

  const joinedRooms = userObj.joinedRooms
    .map((joinedRoom) => {
      return chatRoomData.find(
        (roomData) => roomData.chatRoomId === joinedRoom.chatRoomId
      )
    })
    .filter(Boolean) as unknown as ChatRoomType[]

  usePersistUserStore.getState().setCurUser(userId)
  useUserStore.getState().setUser(userObj)
  useChatRoomStore.getState().setChatRoom(joinedRooms)
}

export default setUserAndChatRoom

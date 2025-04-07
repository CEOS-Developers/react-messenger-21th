import { defaultUser } from '../assets/data/defaultUser'
import { chatRoomData } from '../assets/data/chatRoom.json'
import { ChatRoom as ChatRoomType } from '../interface/ChatRoom'
import findUser from './findUser'
import { useUserStore } from '../stores/useUserStore'
import { useChatRoomStore } from '../stores/useChatRoomStore'

const setUserAndChatRoom = (userId: number) => {
  const userObj = findUser(userId) ?? defaultUser

  const joinedRooms = userObj.joinedRooms
    .map((joinedRoom) => {
      return chatRoomData.find(
        (roomData) => roomData.chatRoomId === joinedRoom.chatRoomId
      )
    })
    .filter(Boolean) as unknown as ChatRoomType[]

  useUserStore.getState().setUser(userObj)
  useChatRoomStore.getState().setChatRoom(joinedRooms)
}

export default setUserAndChatRoom

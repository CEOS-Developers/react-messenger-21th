import { defaultUser } from '@/assets/data/defaultUser'
import { ChatRoom as ChatRoomType } from '@/interface/ChatRoom'
import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { usePersistUserStore } from '@/stores/usePersistUserStore'
import { usePersistChatRoomStore } from '@/stores/usePersistChatRoomStore'

const setUserAndChatRoom = (userId: number) => {
  const userObj =
    usePersistUserStore.getState().getUserById(userId) ?? defaultUser

  const joinedRooms = userObj.joinedRooms
    .map((joinedRoom) =>
      usePersistChatRoomStore.getState().getRoomById(joinedRoom.chatRoomId)
    )
    .filter(Boolean) as unknown as ChatRoomType[]

  usePersistUserStore.getState().setCurUser(userId)
  useUserStore.getState().setUser(userObj)
  useChatRoomStore.getState().setChatRoom(joinedRooms)
}

export default setUserAndChatRoom

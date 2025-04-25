import { usePersistChatRoomStore } from '@/stores/usePersistChatRoomStore'
import { ChatRoom } from '@/interface/ChatRoom'

export const syncToPersistChatRoom = (updatedRoom: ChatRoom) => {
  const { updateChatRoom } = usePersistChatRoomStore.getState()
  updateChatRoom(updatedRoom)
}

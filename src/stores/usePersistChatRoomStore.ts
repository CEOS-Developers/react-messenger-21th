import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { chatRoomData } from '@/assets/data/chatRoom.json'
import { LOCAL_KEY_CHAT } from '@/utils/constants'
import { ChatRoom } from '@/interface/ChatRoom'

interface PersistChatRoomStore {
  chatRoomData: ChatRoom[]
  chatRoomRef: number

  updateChatRoom: (newRoom: ChatRoom) => void
  createChatRoom: (newRoom: ChatRoom) => void

  getRoomById: (roomId: number) => ChatRoom | undefined
}

export const usePersistChatRoomStore = create<PersistChatRoomStore>()(
  persist(
    (set, get) => ({
      chatRoomData: chatRoomData as unknown as ChatRoom[],
      chatRoomRef: 5,

      updateChatRoom: (newRoom) => {
        const updatedRooms = get().chatRoomData.map((room) =>
          room.chatRoomId === newRoom.chatRoomId ? newRoom : room
        )
        set({ chatRoomData: updatedRooms })
      },

      createChatRoom: (newRoom) =>
        set({
          chatRoomData: [...get().chatRoomData, newRoom],
          chatRoomRef: get().chatRoomRef + 1,
        }),

      getRoomById: (roomId) =>
        get().chatRoomData.find((room) => room.chatRoomId === roomId),
    }),

    {
      name: LOCAL_KEY_CHAT,
    }
  )
)

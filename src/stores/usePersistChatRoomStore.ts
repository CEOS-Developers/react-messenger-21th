import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { chatRoomData } from '@/assets/data/chatRoom.json'
import { LOCAL_KEY_USER } from '@/utils/constants'
import { ChatRoom } from '@/interface/ChatRoom'

interface PersistChatRoomStore {
  chatRoomData: ChatRoom[]
  chatRoomRef: number

  updateChatRoom: (newRoom: ChatRoom) => void

  getRoomById: (roomId: number) => ChatRoom | undefined
  createChatRoom: (roomId: number, members: number[], roomName?: string) => void
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
      getRoomById: (roomId) =>
        get().chatRoomData.find((room) => room.chatRoomId === roomId),
      createChatRoom: (roomId, members, roomName) => {
        set((state) => {
          if (!state.chatRoomData) return state

          const newRoom = {
            chatRoomId: roomId,
            roomName: roomName || null,
            member: [...members],
            chats: {},
          }

          state.chatRoomRef += 1

          return {
            chatRoomData: [...state.chatRoomData, newRoom],
          }
        })
      },
    }),
    {
      name: LOCAL_KEY_USER,
    }
  )
)

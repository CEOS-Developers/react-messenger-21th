import { create } from 'zustand'
import { ChatRoom } from '../interface/ChatRoom'
import { Chat } from '../interface/Chat'
import { formatDateForData } from '../utils/format'

interface ChatRoomState {
  chatRoom: ChatRoom[] | null
  setChatRoom: (chatRooms: ChatRoom[]) => void

  addChat: (roomId: number, newChat: Chat) => void
}

export const useChatRoomStore = create<ChatRoomState>((set) => ({
  chatRoom: null,
  setChatRoom: (chatRooms) => set({ chatRoom: chatRooms }),
  addChat: (roomId, newChat) => {
    set((state) => {
      if (!state.chatRoom) return state

      const formattedDate = formatDateForData(new Date())

      const updatedChatRooms = state.chatRoom.map((room) => {
        //현재 채팅방이 아니면 상태 유지
        if (room.chatRoomId !== roomId) return room

        //현재 채팅방에 newChat 반영
        const prevChats = room.chats[formattedDate] || []
        const updatedChats = {
          ...room.chats,
          [formattedDate]: [...prevChats, newChat],
        }

        return {
          ...room,
          chats: updatedChats,
        }
      })

      return {
        chatRoom: updatedChatRooms,
      }
    })
  },
}))

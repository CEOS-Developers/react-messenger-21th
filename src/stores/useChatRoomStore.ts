import { create } from 'zustand'
import { ChatRoom } from '../interface/ChatRoom'

interface ChatRoomState {
  chatRoom: ChatRoom[] | null
  setChatRoom: (chatRooms: ChatRoom[]) => void
}

export const useChatRoomStore = create<ChatRoomState>((set) => ({
  chatRoom: null,
  setChatRoom: (chatRooms) => set({ chatRoom: chatRooms }),
}))

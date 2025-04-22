import { create } from 'zustand'
import { ChatRoom } from '../interface/ChatRoom'
import { Chat } from '../interface/Chat'
import { formatDateForData } from '../utils/format'

interface ChatRoomState {
  chatRoom: ChatRoom[] | null
  chatRoomRef: number
  setChatRoom: (chatRooms: ChatRoom[]) => void
  addChat: (roomId: number, newChat: Chat) => void

  removeChatRoom: (roomId: number) => void
  createChatRoom: (roomId: number, members: number[], roomName?: string) => void
  addMember: (roomId: number, memberId: number[]) => void
}

export const useChatRoomStore = create<ChatRoomState>((set) => ({
  chatRoom: null,
  chatRoomRef: 5,
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
  removeChatRoom: (roomId) => {
    set((state) => {
      if (!state.chatRoom) return state

      const updatedChatRooms = state.chatRoom.filter(
        (room) => room.chatRoomId !== roomId
      )

      return {
        chatRoom: updatedChatRooms,
      }
    })
  },
  createChatRoom: (roomId, members, roomName) => {
    set((state) => {
      if (!state.chatRoom) return state

      const newRoom = {
        chatRoomId: roomId,
        roomName: roomName || null,
        member: [...members],
        chats: {},
      }

      state.chatRoomRef += 1

      return {
        chatRoom: [...state.chatRoom, newRoom],
      }
    })
  },
  addMember: (roomId, memberId) => {
    set((state) => {
      if (!state.chatRoom) return state

      const updatedChatRooms = state.chatRoom.map((room) => {
        if (room.chatRoomId !== roomId) return room

        const newMemberIds = Array.from(new Set([...room.member, ...memberId]))

        return {
          ...room,
          member: newMemberIds,
        }
      })

      return {
        chatRoom: updatedChatRooms,
      }
    })
  },
}))

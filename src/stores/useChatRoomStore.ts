import { create } from 'zustand'
import { ChatRoom } from '@/interface/ChatRoom'
import { Chat } from '@/interface/Chat'
import { formatDateForData } from '@/utils/format'
import { syncToPersistChatRoom } from '@/utils/syncToPersistChatRoom'
import { usePersistChatRoomStore } from './usePersistChatRoomStore'
import { joinRoom } from '@/utils/joinRoom'

interface ChatRoomState {
  chatRoom: ChatRoom[] | null
  setChatRoom: (chatRooms: ChatRoom[]) => void

  addChat: (roomId: number, newChat: Chat) => void
  addMember: (roomId: number, memberId: number[]) => void

  removeUserChatRoom: (roomId: number) => void
  createChatRoom: (roomId: number, members: number[], roomName?: string) => void
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

        const updatedRoom = {
          ...room,
          chats: updatedChats,
        }
        syncToPersistChatRoom(updatedRoom)
        return updatedRoom
      })
      return {
        chatRoom: updatedChatRooms,
      }
    })
  },

  addMember: (roomId, memberId) => {
    set((state) => {
      if (!state.chatRoom) return state

      const updatedChatRooms = state.chatRoom.map((room) => {
        if (room.chatRoomId !== roomId) return room

        const newMemberIds = Array.from(new Set([...room.member, ...memberId]))
        const updatedRoom = {
          ...room,
          member: newMemberIds,
        }

        joinRoom(roomId, memberId)
        syncToPersistChatRoom(updatedRoom)
        return updatedRoom
      })

      return {
        chatRoom: updatedChatRooms,
      }
    })
  },

  removeUserChatRoom: (roomId) => {
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

      joinRoom(roomId, members)
      usePersistChatRoomStore.getState().createChatRoom(newRoom)

      return {
        chatRoom: [...state.chatRoom, newRoom],
      }
    })
  },
}))

import { create } from 'zustand'
import { User } from '../interface/User'
import { defaultUser } from '../assets/data/defaultUser'

interface UserState {
  user: User
  setUser: (user: User) => void
  updateLastSeenTime: (roomId: number) => void
  leaveChatRoom: (roomId: number) => void
  enterChatRoom: (roomId: number) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: defaultUser,
  setUser: (user) => set({ user }),
  updateLastSeenTime: (roomId) => {
    set((state) => {
      if (!state.user) return state

      const updatedJoinedRooms = state.user.joinedRooms.map((room) => {
        if (room.chatRoomId !== roomId) return room

        return {
          ...room,
          lastSeenTime: Date.now(),
        }
      })

      return {
        user: {
          ...state.user,
          joinedRooms: updatedJoinedRooms,
        },
      }
    })
  },
  leaveChatRoom: (roomId) => {
    set((state) => {
      if (!state.user) return state

      const updatedJoinedRooms = state.user.joinedRooms.filter(
        (room) => room.chatRoomId !== roomId
      )

      return {
        user: {
          ...state.user,
          joinedRooms: updatedJoinedRooms,
        },
      }
    })
  },
  enterChatRoom: (roomId) => {
    set((state) => {
      if (!state.user) return state

      const updatedJoinedRooms = [
        ...state.user.joinedRooms,
        { chatRoomId: roomId, lastSeenTime: Date.now() },
      ]

      return {
        user: {
          ...state.user,
          joinedRooms: updatedJoinedRooms,
        },
      }
    })
  },
}))

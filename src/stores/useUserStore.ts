import { create } from 'zustand'
import { User } from '@/interface/User'
import { defaultUser } from '@/assets/data/defaultUser'
import { syncToPersistUser } from '@/utils/syncToPersistUser'

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

      const updatedUser = {
        ...state.user,
        joinedRooms: updatedJoinedRooms,
      }

      syncToPersistUser(updatedUser)
      return {
        user: updatedUser,
      }
    })
  },
  leaveChatRoom: (roomId) => {
    set((state) => {
      if (!state.user) return state

      const updatedJoinedRooms = state.user.joinedRooms.filter(
        (room) => room.chatRoomId !== roomId
      )

      const updatedUser = {
        ...state.user,
        joinedRooms: updatedJoinedRooms,
      }

      syncToPersistUser(updatedUser)
      return {
        user: updatedUser,
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

      const updatedUser = {
        ...state.user,
        joinedRooms: updatedJoinedRooms,
      }

      syncToPersistUser(updatedUser)
      return {
        user: updatedUser,
      }
    })
  },
}))

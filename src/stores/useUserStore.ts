import { create } from 'zustand'
import { User } from '../interface/User'
import { defaultUser } from '../assets/data/defaultUser'

interface UserState {
  user: User
  setUser: (user: User) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: defaultUser,
  setUser: (user) => set({ user }),
}))

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { userData } from '@/assets/data/user.json'
import { LOCAL_KEY_USER } from '@/utils/constants'
import { User } from '@/interface/User'

interface PersistUserStore {
  userData: User[]
  updateUser: (newUser: User) => void

  curUserId: number
  setCurUser: (userId: number) => void
  getUserById: (userId: number) => User | undefined
}

export const usePersistUserStore = create<PersistUserStore>()(
  persist(
    (set, get) => ({
      userData: userData,
      updateUser: (newUserData) => {
        const updatedUsers = get().userData.map((user) =>
          user.id === newUserData.id ? newUserData : user
        )
        set({ userData: updatedUsers })
      },

      curUserId: 1,
      setCurUser: (userId) => set({ curUserId: userId }),
      getUserById: (userId) =>
        get().userData.find((user) => user.id === userId),
    }),
    {
      name: LOCAL_KEY_USER,
    }
  )
)

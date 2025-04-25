import { usePersistUserStore } from '@/stores/usePersistUserStore'
import { User } from '@/interface/User'

export const syncToPersistUser = (user: User) => {
  const { updateUser } = usePersistUserStore.getState()
  updateUser(user)
}

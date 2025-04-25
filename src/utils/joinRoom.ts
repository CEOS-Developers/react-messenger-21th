import { usePersistUserStore } from '@/stores/usePersistUserStore'

export const joinRoom = (roomId: number, memberIds: number[]) => {
  const { getUserById, updateUser } = usePersistUserStore.getState()

  memberIds.forEach((id) => {
    const user = getUserById(id)

    if (!user) return
    const updatedJoinedRooms = [
      ...user.joinedRooms,
      { chatRoomId: roomId, lastSeenTime: 0 },
    ]

    const updatedUser = {
      ...user,
      joinedRooms: updatedJoinedRooms,
    }

    updateUser(updatedUser)
  })
}

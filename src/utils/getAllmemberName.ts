import { usePersistUserStore } from '@/stores/usePersistUserStore'

export const getAllMemberName = (memberIds: number[]) => {
  return memberIds
    .map((memberId: number) =>
      usePersistUserStore.getState().getUserById(memberId)
    )
    .join('')
}

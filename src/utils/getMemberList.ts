import { usePersistUserStore } from '@/stores/usePersistUserStore'

export interface MemberArrayType {
  id: number
  name: string
  profileColor: string
}

const getMemberArray = (memberIds: number[]) => {
  const partnerData = memberIds.reduce((acc: MemberArrayType[], id: number) => {
    const user = usePersistUserStore.getState().getUserById(id)
    if (user) {
      acc.push({
        id: id,
        name: user.name,
        profileColor: user.profileColor,
      })
    }
    return acc
  }, [])

  return partnerData
}

export { getMemberArray }

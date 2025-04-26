import { userData } from '@/assets/data/user.json'

const getRoomName = (memberIds: number[]) => {
  return memberIds.length === 0
    ? '(알 수 없음)'
    : memberIds
        .map(
          (memberId: number) =>
            userData.find((user) => user.id === memberId)?.name || '알 수 없음'
        )
        .join(', ')
}

export default getRoomName

import { userData } from '../assets/data/user.json'

export const getAllMemberName = (memberIds: number[]) => {
  return memberIds
    .map(
      (memberId: number) =>
        userData.find((user) => user.id === memberId)?.name || ''
    )
    .join('')
}

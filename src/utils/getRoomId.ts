import { useChatRoomStore } from '@/stores/useChatRoomStore'

const getRoomId = (memberId: number) => {
  const { chatRoom } = useChatRoomStore.getState()
  const room = chatRoom?.find(
    (r) => r.member.length === 2 && r.member.includes(memberId)
  )
  return room?.chatRoomId
}

export { getRoomId }

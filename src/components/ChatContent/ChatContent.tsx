import { useLocation } from 'react-router'
import ChatTitle from './ChatTitle'
import ChatField from './ChatField'
import TextFiled from './TextFiled'
import { ChatRoomIcon } from '@/assets/Icons/AppBar'

import { useUserStore } from '@/stores/useUserStore'
import { usePersistUserStore } from '@/stores/usePersistUserStore'

const ChatContent = () => {
  const { member } = useLocation().state ?? {}
  const { user } = useUserStore()
  const { getUserById } = usePersistUserStore()

  /* 나를 제외한 멤버들의 Id 배열 */
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  /* 채팅 참가자 정보 객체 */
  const partnerData = memberIds.reduce(
    (
      acc: Record<number, { name: string; profileColor: string }>,
      id: number
    ) => {
      const user = getUserById(id)
      if (user) {
        acc[id] = {
          name: user.name,
          profileColor: user.profileColor,
        }
      }
      return acc
    },
    {}
  )

  return (
    <div className="container">
      <div className="bg-gray02">
        <div className="app-bar">
          <ChatTitle memberIds={memberIds} />
          <ChatRoomIcon />
        </div>
      </div>
      <ChatField member={partnerData} />
      <TextFiled />
    </div>
  )
}
export default ChatContent

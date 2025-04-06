import * as s from './ChatContent.Styled'
import ContentHeader from '../common/ContentHeader'
import ChatTitle from './ChatTitle'
import TextInput from './TextInput'
import ChatField from './ChatField'
import { ChatRoomIcon } from '../../assets/Icons/Header'

import { userData } from '../../assets/data/user.json'

import { useLocation } from 'react-router'
import { useUserStore } from '../../stores/useUserStore'

const ChatContent = () => {
  const { member } = useLocation().state ?? {}
  const { user, setUser } = useUserStore()

  /* 나를 제외한 멤버들의 Id 배열 */
  const memberIds = member.filter((memberId: number) => memberId !== user.id)

  /* ChatTitle의 멤버의 이름을 클릭하면 사용자가 바뀌는 이벤트 */
  const handleClickMemberName = () => {
    const targetUser = userData.find((user) => user.id === memberIds[0])
    if (targetUser) setUser(targetUser)
  }

  /* 채팅 참가자 정보 객체 */
  const partnerData = memberIds.reduce(
    (
      acc: Record<number, { name: string; profileColor: string }>,
      id: number
    ) => {
      const user = userData.find((user) => user.id === id)
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
    <s.ChatContentWrapper>
      <ContentHeader
        leftChild={
          <ChatTitle
            memberIds={memberIds}
            handleClickMemberName={handleClickMemberName}
          />
        }
        rightChild={<ChatRoomIcon />}
      />
      <ChatField member={partnerData} />
      <TextInput />
    </s.ChatContentWrapper>
  )
}
export default ChatContent

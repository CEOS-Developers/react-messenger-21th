import StatusBar from '@/components/Commons/StatusBar'
import CheckboxSelection from '@/components/MemberSelection/CheckboxSelection'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { useUserStore } from '@/stores/useUserStore'
import { SYSTEM_ID } from '@/utils/constants'
import getRoomName from '@/utils/getRoomName'
import { useNavigate, useParams } from 'react-router'

const InviteFriends = () => {
  const nav = useNavigate()
  const roomId = Number(useParams().id)
  const { user, updateLastSeenTime } = useUserStore()
  const { addChat, addMember } = useChatRoomStore()

  const handleInviteFriends = (selectedIds: number[]) => {
    const friendNames = getRoomName(selectedIds)
    const newChat = {
      id: Date.now(),
      sender: SYSTEM_ID,
      content: `${user.name}님이 ${friendNames}님을 그룹에 추가했습니다.`,
    }
    updateLastSeenTime(roomId)
    addChat(roomId, newChat)
    addMember(roomId, selectedIds)
    nav(-2)
  }
  const handleBack = () => {
    nav(-1)
  }

  return (
    <div className="wrapper">
      <StatusBar color="white" />
      <CheckboxSelection
        handleNextAction={handleInviteFriends}
        handleBackAction={handleBack}
      />
    </div>
  )
}

export default InviteFriends

import { useNavigate } from 'react-router'

import { HomeIcon } from '@/assets/Icons/AppBar'
import { ProfileCircleDefault } from '@/assets/Icons/Profile'
import FriendsViewer from './FriendsViewer'

import { useUserStore } from '@/stores/useUserStore'
import findUser from '@/utils/findUser'
import { useChatRoomStore } from '@/stores/useChatRoomStore'

const FriendsListContent = () => {
  const { user } = useUserStore()
  const { chatRoom } = useChatRoomStore()
  const nav = useNavigate()

  const friendsData = user.friends
    .map((id) => {
      const friend = findUser(id)
      if (!friend) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { friends, joinedRooms, ...rest } = friend
      return rest
    })
    .filter((friend) => friend !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'))

  const joinedGroupChat = user.joinedRooms
    .map((joineddRoom) => {
      const roomData = chatRoom?.find(
        (room) => room.chatRoomId === joineddRoom.chatRoomId
      )
      if (!roomData) return null

      /* 1:1 채팅이거나 채팅방 이름이 없는 단체 채팅방은 제외 */
      const { chatRoomId, member, roomName } = roomData
      if (roomName === null || member.length < 3) return null

      return { chatRoomId, member, roomName }
    })
    .filter((room) => room !== null)

  return (
    <div className="container">
      <div className="pt-1">
        <div className="app-bar app-bar--62">
          <div
            className="cursor-pointer"
            onClick={() => nav(`/profile/${user.id}`)}>
            <div className="flex items-center gap-[9px]">
              <ProfileCircleDefault color={user.profileColor} />
              <h2 className="font-Body-1-b">{user.name}</h2>
            </div>
          </div>
          <HomeIcon />
        </div>
      </div>

      <FriendsViewer
        friendsData={friendsData}
        joinedGroupChat={joinedGroupChat}
      />
    </div>
  )
}

export default FriendsListContent

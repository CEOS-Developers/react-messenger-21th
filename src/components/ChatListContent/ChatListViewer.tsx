import SearchBox from '../common/SearchBox'
import * as s from './ChatListViewer.Styled'
import { chatRoomData } from '../../assets/data/chatRoom.json'
import { useUserStore } from '../../stores/useUserStore'
import RoomItem from './roomItem'

const ChatListViewer = () => {
  const { user } = useUserStore()

  const rooms = user.joinedRooms.map((joinedRoom) => {
    const joinedRoomData = chatRoomData.find(
      (roomData) => roomData.chatRoomId === joinedRoom.chatRoomId
    )
    if (joinedRoomData) return joinedRoomData
  })

  return (
    <s.Wrapper>
      <SearchBox />
      <s.List>
        {rooms.map(
          (room) => room && <RoomItem key={room.chatRoomId} {...room} />
        )}
      </s.List>
    </s.Wrapper>
  )
}

export default ChatListViewer

/** ui */
import * as s from './ChatListViewer.Styled'
import SearchBox from '../common/SearchBox'
import RoomItem from './RoomItem'

/** global states */
import { useUserStore } from '../../stores/useUserStore'
import { useChatRoomStore } from '../../stores/useChatRoomStore'

const ChatListViewer = () => {
  const { user } = useUserStore()
  const { chatRoom } = useChatRoomStore()

  const sortedChatRoom = chatRoom
    ?.map((room) => {
      const chats = room.chats
      const lastChatKey = Object.keys(chats).slice(-1)[0]
      const lastChat = chats[lastChatKey][chats[lastChatKey].length - 1]
      const lastSeenTime =
        user.joinedRooms.find((r) => r.chatRoomId === room.chatRoomId)
          ?.lastSeenTime ?? 0

      return { ...room, lastChat, lastSeenTime }
    })
    .sort((a, b) => b.lastChat.id - a.lastChat.id)

  return (
    <s.Wrapper>
      <SearchBox />
      <s.List>
        {sortedChatRoom?.map(
          (room) => room && <RoomItem key={room.chatRoomId} {...room} />
        )}
      </s.List>
    </s.Wrapper>
  )
}

export default ChatListViewer

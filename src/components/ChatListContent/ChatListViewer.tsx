/** ui */
import * as s from './ChatListViewer.Styled'
import SearchBox from '../common/SearchBox'
import RoomItem from './RoomItem'

/** global states */
import { useUserStore } from '../../stores/useUserStore'
import { useChatRoomStore } from '../../stores/useChatRoomStore'

import { ChatRoom } from '../../interface/ChatRoom'

const ChatListViewer = () => {
  const { user } = useUserStore()
  const { chatRoom } = useChatRoomStore()

  return (
    <s.Wrapper>
      <SearchBox />
      <s.List>
        {chatRoom?.map(
          (room: ChatRoom, idx: number) =>
            room && (
              <RoomItem
                key={room.chatRoomId}
                {...room}
                lastSeenTime={user.joinedRooms[idx].lastSeenTime}
              />
            )
        )}
      </s.List>
    </s.Wrapper>
  )
}

export default ChatListViewer

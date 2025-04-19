import { useState } from 'react'

/** ui */
import SearchBox from '../Common/SearchBox'
import RoomItem from './RoomItem'
import SearchedChatList from './SearchedChatList'

/** global states */
import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'

const ChatListViewer = () => {
  const { user } = useUserStore()
  const { chatRoom } = useChatRoomStore()
  const [searchText, setSearchText] = useState('')

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
    <div className="scroll-container">
      <div className="pt-2">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="list pt-6">
        {sortedChatRoom && searchText && (
          <SearchedChatList
            sortedChatRoom={sortedChatRoom}
            searchText={searchText}
          />
        )}
        {!searchText &&
          sortedChatRoom?.map(
            (room) => room && <RoomItem key={room.chatRoomId} {...room} />
          )}
      </div>
    </div>
  )
}

export default ChatListViewer

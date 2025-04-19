import RoomItem from './RoomItem'
import { ChatRoom } from '@/interface/ChatRoom'
import { Chat } from '@/interface/Chat'

interface RoomItemProps extends ChatRoom {
  lastSeenTime: number
  lastChat: Chat
}

const SearchedResult = ({
  title,
  filteredRoom,
}: {
  title: string
  filteredRoom: RoomItemProps[]
}) => {
  return (
    <div className="font-Body-2-m text-gray12 flex flex-col gap-1">
      <div className="py-2.5">{title}</div>
      {filteredRoom.length === 0 ? (
        <div className="self-center pb-4">검색 결과가 없습니다.</div>
      ) : (
        <div className="list">
          {filteredRoom.map(
            (room: RoomItemProps) =>
              room && <RoomItem key={room.chatRoomId} {...room} />
          )}
        </div>
      )}
    </div>
  )
}

export default SearchedResult

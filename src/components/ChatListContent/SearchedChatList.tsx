import Hangul from 'hangul-js'
import RoomItem from './RoomItem'
import { useUserStore } from '@/stores/useUserStore'
import { getAllMemberName } from '@/utils/getAllmemberName'
import { ChatRoom } from '@/interface/ChatRoom'
import { Chat } from '@/interface/Chat'

interface RoomItemProps extends ChatRoom {
  lastSeenTime: number
  lastChat: Chat
}

const SearchedChatList = ({
  sortedChatRoom,
  searchText,
}: {
  sortedChatRoom: RoomItemProps[]
  searchText: string
}) => {
  const { user } = useUserStore()

  const filteredRoom = sortedChatRoom?.filter((room: RoomItemProps) => {
    /* member name filter */
    const memberIds = room.member.filter((memberId) => memberId !== user.id)
    const memberNames = getAllMemberName(memberIds)
    let disassembled = Hangul.disassemble(memberNames).join('')
    const inputDisassembled = Hangul.disassemble(searchText).join('')
    const result = disassembled.includes(inputDisassembled)
    if (result) return true
    if (!room.roomName) return false

    /* room name filter */
    disassembled = Hangul.disassemble(room.roomName).join('')
    return disassembled.includes(inputDisassembled)
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="font-Body-2-m text-gray12 flex flex-col gap-1">
        <div className="py-2.5">채팅방</div>
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

      <div className="font-Body-2-m text-gray12 flex flex-col gap-1">
        <div className="py-2.5">메시지</div>
        <div className="self-center pb-4">검색 결과가 없습니다.</div>
      </div>
    </div>
  )
}

export default SearchedChatList

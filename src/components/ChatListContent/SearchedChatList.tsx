import Hangul from 'hangul-js'
import { useUserStore } from '../../stores/useUserStore'
import { getAllMemberName } from '../../utils/getAllmemberName'
import { ChatRoom } from '../../interface/ChatRoom'
import { Chat } from '../../interface/Chat'
import RoomItem from './RoomItem'
import * as s from './SearchedChatList.Styled'

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

  const filteredByRoomName = sortedChatRoom?.filter((room: RoomItemProps) => {
    /* room name filter */
    if (!room.roomName) return false
    const disassembled = Hangul.disassemble(room.roomName).join('')
    const inputDisassembled = Hangul.disassemble(searchText).join('')
    return disassembled.includes(inputDisassembled)
  })

  const filteredByMemberName = sortedChatRoom?.filter((room: RoomItemProps) => {
    /* member name filter */
    const memberIds = room.member.filter((memberId) => memberId !== user.id)
    const memberNames = getAllMemberName(memberIds)
    const disassembled = Hangul.disassemble(memberNames).join('')
    const inputDisassembled = Hangul.disassemble(searchText).join('')
    return disassembled.includes(inputDisassembled)
  })
  return (
    <div>
      <s.Section>
        <s.Keyword $isM={true}>채팅방 이름 검색 결과</s.Keyword>
        {filteredByRoomName.length === 0 ? (
          <s.Result $isM={true}>검색 결과가 없습니다.</s.Result>
        ) : (
          filteredByRoomName.map(
            (room: RoomItemProps) =>
              room && <RoomItem key={room.chatRoomId} {...room} />
          )
        )}
      </s.Section>

      <s.Section>
        <s.Keyword $isM={true}>친구 이름 검색 결과</s.Keyword>
        {filteredByMemberName.length === 0 ? (
          <s.Result $isM={true}>검색 결과가 없습니다.</s.Result>
        ) : (
          filteredByMemberName.map(
            (room: RoomItemProps) =>
              room && <RoomItem key={room.chatRoomId} {...room} />
          )
        )}
      </s.Section>
    </div>
  )
}

export default SearchedChatList

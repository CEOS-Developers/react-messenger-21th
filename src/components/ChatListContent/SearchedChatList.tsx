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
    <s.Wrapper>
      <s.Section>
        <s.Keyword $isM={true}>채팅방</s.Keyword>
        {filteredRoom.length === 0 ? (
          <s.Result $isM={true}>검색 결과가 없습니다.</s.Result>
        ) : (
          <s.ChatContainer>
            {filteredRoom.map(
              (room: RoomItemProps) =>
                room && <RoomItem key={room.chatRoomId} {...room} />
            )}
          </s.ChatContainer>
        )}
      </s.Section>

      <s.Section>
        <s.Keyword $isM={true}>메시지</s.Keyword>
        <s.Result $isM={true}>검색 결과가 없습니다.</s.Result>
      </s.Section>
    </s.Wrapper>
  )
}

export default SearchedChatList

import { useEffect, useState } from 'react'

import SearchBox from '../Commons/SearchBox'
import ProfileItem from './ProfileItem'
import ToggleBox from './ToggleBox'
import GroupAddingItem from './GroupAddingItem'
import GroupChatItem from './GroupChatItem'

import { User } from '@/interface/User'
import { ChatRoom } from '@/interface/ChatRoom'
import { filterByName } from '@/utils/filterByName'

const FriendsViewer = ({
  friendsData,
  joinedGroupChat,
}: {
  friendsData: Omit<User, 'friends' | 'joinedRooms'>[]
  joinedGroupChat: Omit<ChatRoom, 'chats'>[]
}) => {
  const [groupOpen, setGroupOpen] = useState(true)
  const [friendsOpen, setFriendsOpen] = useState(true)

  const [searchText, setSearchText] = useState('')

  /* 사용자가 검색어를 입력하면 가려진 목록 자동으로 열기 */
  useEffect(() => {
    if (searchText) {
      setGroupOpen(true)
      setFriendsOpen(true)
    }
  }, [searchText])

  /* 이름 검색 */
  const filteredFriends = filterByName(friendsData, searchText)

  return (
    <div className="scroll-container">
      <div className="py-2">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>
      <ToggleBox
        text="그룹"
        length={2}
        isOpen={groupOpen}
        setClosed={setGroupOpen}
      />
      {groupOpen && (
        <div className="list pb-2">
          <GroupAddingItem />
          {joinedGroupChat.map((room) => (
            <GroupChatItem key={room.chatRoomId} {...room} />
          ))}
        </div>
      )}

      <ToggleBox
        text="친구"
        length={friendsData.length}
        isOpen={friendsOpen}
        setClosed={setFriendsOpen}
      />
      <div className="list">
        {friendsOpen &&
          filteredFriends.map((friend) => (
            <ProfileItem key={friend.id} {...friend} />
          ))}
      </div>
    </div>
  )
}

export default FriendsViewer

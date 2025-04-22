import { useEffect, useState } from 'react'

import SearchBox from '../Commons/SearchBox'
import ProfileItem from './ProfileItem'
import ToggleBox from './ToggleBox'

import { User } from '@/interface/User'
import { filterByName } from '@/utils/filterByName'
import GroupAdd from '@/assets/Icons/List/profile-add.svg?react'
import { useNavigate } from 'react-router'

const FriendsViewer = ({
  friendsData,
}: {
  friendsData: Omit<User, 'friends' | 'joinedRooms'>[]
}) => {
  const nav = useNavigate()
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
      <div
        className="flex cursor-pointer flex-col"
        onClick={() => nav('/group')}>
        <div className="flex gap-3 py-2.5">
          <GroupAdd />
          <div className="flex-1">
            <p className="font-Body-1-b">그룹 만들기</p>
            <p className="font-Body-2-r text-gray08">
              그룹 대화에 친구를 초대해 보세요.
            </p>
          </div>
        </div>
        <div className="partition"></div>
      </div>
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

import { useEffect, useState } from 'react'
import Hangul from 'hangul-js'

import * as s from './FriendsViewer.Styled'
import SearchBox from '../Common/SearchBox'
import ProfileItem from './ProfileItem'
import ToggleBox from './ToggleBox'

import { User } from '../../interface/User'

const FriendsViewer = ({
  friendsData,
}: {
  friendsData: Omit<User, 'friends' | 'joinedRooms'>[]
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
  const filteredFriends = friendsData.filter((friend) => {
    const disassembled = Hangul.disassemble(friend.name).join('')
    const inputDisassembled = Hangul.disassemble(searchText).join('')
    return disassembled.includes(inputDisassembled)
  })

  return (
    <s.Wrapper>
      <SearchBox searchText={searchText} setSearchText={setSearchText} />
      <ToggleBox
        text="그룹"
        length={2}
        isOpen={groupOpen}
        setClosed={setGroupOpen}
      />
      <ToggleBox
        text="친구"
        length={friendsData.length}
        isOpen={friendsOpen}
        setClosed={setFriendsOpen}
      />
      <s.List>
        {friendsOpen &&
          filteredFriends.map((friend) => (
            <ProfileItem key={friend.id} {...friend} />
          ))}
      </s.List>
    </s.Wrapper>
  )
}

export default FriendsViewer

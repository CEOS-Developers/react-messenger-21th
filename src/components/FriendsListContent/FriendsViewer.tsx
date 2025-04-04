import * as s from './FriendsViewer.Styled'
import SearchBox from '../common/SearchBox'
import { User } from '../../interface/User'
import ProfileItem from './ProfileItem'
import ToggleBox from './ToggleBox'
import { useState } from 'react'

const FriendsViewer = ({
  friendsData,
}: {
  friendsData: Omit<User, 'friends' | 'joinedRooms'>[]
}) => {
  const [groupOpen, setGroupOpen] = useState(true)
  const [friendsOpen, setFriendsOpen] = useState(true)
  return (
    <s.Wrapper>
      <SearchBox />
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
          friendsData.map((friend) => (
            <ProfileItem key={friend.id} {...friend} />
          ))}
      </s.List>
    </s.Wrapper>
  )
}

export default FriendsViewer

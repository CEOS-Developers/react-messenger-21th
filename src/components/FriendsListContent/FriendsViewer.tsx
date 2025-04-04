import * as s from './FriendsViewer.Styled'
import SearchBox from '../common/SearchBox'
import { User } from '../../interface/User'
import ProfileItem from './ProfileItem'

const FriendsViewer = ({
  friendsData,
}: {
  friendsData: Omit<User, 'friends' | 'joinedRooms'>[]
}) => {
  return (
    <s.Wrapper>
      <SearchBox />
      <s.List>
        {friendsData.map((friend) => (
          <ProfileItem key={friend.id} {...friend} />
        ))}
      </s.List>
    </s.Wrapper>
  )
}

export default FriendsViewer

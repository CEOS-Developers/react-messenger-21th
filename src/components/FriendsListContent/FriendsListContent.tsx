import { useNavigate } from 'react-router'

import * as s from './FriendsListContent.Styled'
import { HomeIcon } from '../../assets/Icons/AppBar'
import { ProfileDefault } from '../../assets/Icons/Profile'
import { EventIcon } from '../Common/Common.Styled'
import FriendsViewer from './FriendsViewer'

import { useUserStore } from '../../stores/useUserStore'
import findUser from '../../utils/findUser'

const FriendsListContent = () => {
  const { user } = useUserStore()
  const nav = useNavigate()

  const friendsData = user.friends
    .map((id) => {
      const friend = findUser(id)
      if (!friend) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { friends, joinedRooms, ...rest } = friend
      return rest
    })
    .filter((friend) => friend !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'))

  return (
    <s.FLContent>
      <div className="pt-1">
        <div className="app-bar app-bar--62">
          <EventIcon onClick={() => nav(`/profile/${user.id}`)}>
            <s.UserProfileContainer>
              <ProfileDefault color={user.profileColor} />
              <s.Name>{user.name}</s.Name>
            </s.UserProfileContainer>
          </EventIcon>
          <HomeIcon />
        </div>
      </div>

      <FriendsViewer friendsData={friendsData} />
    </s.FLContent>
  )
}

export default FriendsListContent

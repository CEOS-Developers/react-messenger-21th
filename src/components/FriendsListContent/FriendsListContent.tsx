import { useNavigate } from 'react-router'

import * as s from './FriendsListContent.Styled'
import { HomeIcon } from '../../assets/Icons/AppBar'
import { ProfileDefault } from '../../assets/Icons/Profile'
import ContentHeader from '../Common/ContentHeader'
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
      <s.HeaderWrapper>
        <ContentHeader
          $isTransparent={true}
          leftChild={
            <EventIcon onClick={() => nav(`/profile/${user.id}`)}>
              <s.UserProfileContainer>
                <ProfileDefault color={user.profileColor} />
                <s.Name>{user.name}</s.Name>
              </s.UserProfileContainer>
            </EventIcon>
          }
          rightChild={<HomeIcon />}
        />
      </s.HeaderWrapper>
      <FriendsViewer friendsData={friendsData} />
    </s.FLContent>
  )
}

export default FriendsListContent

import { useNavigate } from 'react-router'

import * as s from './FriendsListContent.Styled'
import { HomeIcon } from '../../assets/Icons/Header'
import { ProfileDefault } from '../../assets/Icons/Profile'
import ContentHeader from '../common/ContentHeader'
import { EventIcon } from '../common/Common.Styled'
import FriendsViewer from './FriendsViewer'

import { userData } from '../../assets/data/user.json'
import { useUserStore } from '../../stores/useUserStore'

const FriendsListContent = () => {
  const { user } = useUserStore()
  const nav = useNavigate()

  const friendsData = user.friends
    .map((id) => {
      const friend = userData.find((user) => user.id === id)
      if (!friend) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { friends, joinedRooms, ...rest } = friend
      return rest
    })
    .filter((friend) => friend !== null)

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

import { HomeIcon } from '../../assets/Icons/Header'
import { ProfileDefault } from '../../assets/Icons/Profile'
import * as s from './FriendsListContent.Styled'
import ContentHeader from '../common/ContentHeader'
import FriendsViewer from './FriendsViewer'
import { userData } from '../../assets/data/user.json'
import { useUserStore } from '../../stores/useUserStore'

const FriendsListContent = () => {
  const { user } = useUserStore()

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
            <s.UserProfileContainer>
              <ProfileDefault color={user.profileColor} />
              <s.Name>{user.name}</s.Name>
            </s.UserProfileContainer>
          }
          rightChild={<HomeIcon />}
        />
      </s.HeaderWrapper>
      <FriendsViewer friendsData={friendsData} />
    </s.FLContent>
  )
}

export default FriendsListContent

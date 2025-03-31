import { HomeIcon } from '../../assets/Icons/Header'
import { ProfileDefault } from '../../assets/Icons/Profile'
import * as s from './FriendsListContent.Styled'
import ContentHeader from '../common/ContentHeader'
import FriendsViewer from './FriendsViewer'

const FriendsListContent = () => {
  return (
    <s.FLContent>
      <s.HeaderWrapper>
        <ContentHeader
          $isTransparent={true}
          leftChild={
            <s.UserProfileContainer>
              <ProfileDefault color="skyblue" />
              <s.Name>yeeun</s.Name>
            </s.UserProfileContainer>
          }
          rightChild={<HomeIcon />}
        />
      </s.HeaderWrapper>
      <FriendsViewer />
    </s.FLContent>
  )
}

export default FriendsListContent

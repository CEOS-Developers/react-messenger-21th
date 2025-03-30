import { HomeIcon } from '../../assets/Icons/Header'
import { ProfileDefault } from '../../assets/Icons/Profile'
import { Content } from '../common/Common.Styled'
import * as s from './FriendsListContent.Styled'
import ContentHeader from '../common/ContentHeader'

const FriendsListContent = () => {
  return (
    <Content>
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
      FriendsListContent
    </Content>
  )
}

export default FriendsListContent

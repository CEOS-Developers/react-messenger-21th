import { HomeBar, StatusBar } from '../components/common/Bar'
import * as s from '../components/common/Common.Styled'
import ProfileContent from '../components/ProfileContent/ProfileContent'

const ProfilePage = () => {
  return (
    <s.ProfileContainer>
      <StatusBar />
      <ProfileContent />
      <HomeBar $isTransparent={true} />
    </s.ProfileContainer>
  )
}

export default ProfilePage

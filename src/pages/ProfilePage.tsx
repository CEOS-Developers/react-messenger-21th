import { HomeBar, StatusBar } from '../components/Common/Bar'
import * as s from '../components/Common/Common.Styled'
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

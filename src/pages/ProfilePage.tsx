import HomeBar from '@/components/Common/HomeBar'
import * as s from '../components/Common/Common.Styled'
import ProfileContent from '../components/ProfileContent/ProfileContent'
import StatusBar from '@/components/Common/StatusBar'

const ProfilePage = () => {
  return (
    <s.ProfileContainer>
      <StatusBar color="gray" />
      <ProfileContent />
      <HomeBar />
    </s.ProfileContainer>
  )
}

export default ProfilePage

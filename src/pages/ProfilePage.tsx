import StatusBar from '@/components/Commons/StatusBar'
import HomeBar from '@/components/Commons/HomeBar'
import ProfileContent from '@/components/ProfileContent/ProfileContent'

const ProfilePage = () => {
  return (
    <div className="bg-profile wrapper">
      <StatusBar color="gray" />
      <ProfileContent />
      <HomeBar />
    </div>
  )
}

export default ProfilePage

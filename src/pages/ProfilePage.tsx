import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import ProfileContent from '@/components/ProfileContent/ProfileContent'

const ProfilePage = () => {
  return (
    <div className="bg-profile">
      <StatusBar color="gray" />
      <ProfileContent />
      <HomeBar />
    </div>
  )
}

export default ProfilePage

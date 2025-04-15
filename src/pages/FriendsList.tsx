import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import NavigationBar from '@/components/Common/NavigationBar'
import FriendsListContent from '@/components/FriendsListContent/FriendsListContent'
import { NavRole } from '@/utils/constants'

const FriendsList = () => {
  return (
    <div>
      <StatusBar />
      <FriendsListContent />
      <div className="bg-gray01 border-gray08">
        <NavigationBar select={NavRole.HOME} />
        <HomeBar />
      </div>
    </div>
  )
}

export default FriendsList

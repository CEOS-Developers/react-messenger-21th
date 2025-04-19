import StatusBar from '@/components/Common/StatusBar'
import NavigationBar from '@/components/Common/NavigationBar'
import FriendsListContent from '@/components/FriendsListContent/FriendsListContent'
import { NavRole } from '@/utils/constants'

const FriendsList = () => {
  return (
    <div className="wrapper">
      <StatusBar />
      <FriendsListContent />
      <NavigationBar color="gray" select={NavRole.HOME} />
    </div>
  )
}

export default FriendsList

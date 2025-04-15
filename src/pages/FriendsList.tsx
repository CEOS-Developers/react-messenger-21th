import * as s from '../components/Common/Common.Styled'
import { NavRole } from '../utils/constants'
import FriendsListContent from '../components/FriendsListContent/FriendsListContent'
import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import NavigationBar from '@/components/Common/NavigationBar'

const FriendsList = () => {
  return (
    <s.Container>
      <StatusBar />
      <FriendsListContent />
      <NavigationBar color="gray" select={NavRole.HOME} />
      <HomeBar color="gray" />
    </s.Container>
  )
}

export default FriendsList

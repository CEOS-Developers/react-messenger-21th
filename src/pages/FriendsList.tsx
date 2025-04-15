import * as s from '../components/Common/Common.Styled'
import { NavigationBar } from '../components/Common/Bar'
import { NavRole } from '../utils/constants'
import FriendsListContent from '../components/FriendsListContent/FriendsListContent'
import StatusBar from '@/components/Common/StatusBar'

const FriendsList = () => {
  return (
    <s.Container>
      <StatusBar />
      <FriendsListContent />
      <NavigationBar select={NavRole.HOME} />
    </s.Container>
  )
}

export default FriendsList

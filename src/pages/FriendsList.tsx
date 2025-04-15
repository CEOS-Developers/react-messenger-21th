import * as s from '../components/Common/Common.Styled'
import { StatusBar, NavigationBar } from '../components/Common/Bar'
import { NavRole } from '../utils/constants'
import FriendsListContent from '../components/FriendsListContent/FriendsListContent'

const FriendsList = () => {
  return (
    <s.Container>
      <StatusBar $isTransparent={true} />
      <FriendsListContent />
      <NavigationBar select={NavRole.HOME} />
    </s.Container>
  )
}

export default FriendsList

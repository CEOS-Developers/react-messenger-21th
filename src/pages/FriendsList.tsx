import * as s from '../components/common/Common.Styled'
import { StatusBar, NavigationBar } from '../components/common/Bar'
import { NavRole } from '../utils/constants'

const FriendsList = () => {
  return (
    <s.Container>
      <StatusBar $isTransparent={true} />
      <div></div>
      <NavigationBar select={NavRole.HOME} />
    </s.Container>
  )
}

export default FriendsList

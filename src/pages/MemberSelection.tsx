import * as s from '../components/Common/Common.Styled'
import { StatusBar } from '../components/Common/Bar'
import UserChangeSelection from '../components/MemberSelection/UserChangeSelection'

const MemberSelection = () => {
  return (
    <s.Container>
      <StatusBar />
      <UserChangeSelection />
    </s.Container>
  )
}

export default MemberSelection

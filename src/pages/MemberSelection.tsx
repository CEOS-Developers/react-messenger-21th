import * as s from '../components/common/Common.Styled'
import { StatusBar } from '../components/common/Bar'
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

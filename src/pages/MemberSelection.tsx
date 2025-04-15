import * as s from '../components/Common/Common.Styled'
import UserChangeSelection from '../components/MemberSelection/UserChangeSelection'
import StatusBar from '@/components/Common/StatusBar'

const MemberSelection = () => {
  return (
    <s.Container>
      <StatusBar />
      <UserChangeSelection />
    </s.Container>
  )
}

export default MemberSelection

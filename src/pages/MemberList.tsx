import * as s from '../components/Common/Common.Styled'
import MemberListContent from '../components/MemberList/MemberListContent'
import StatusBar from '@/components/Common/StatusBar'

const MemberList = () => {
  return (
    <s.Container>
      <StatusBar color="white" />
      <MemberListContent />
    </s.Container>
  )
}

export default MemberList

import * as s from '../components/Common/Common.Styled'
import MemberListContent from '../components/MemberList/MemberListContent'
import ContentHeader from '../components/Common/ContentHeader'
import { BackIcon, ProfileIcon } from '../assets/Icons/AppBar'
import StatusBar from '@/components/Common/StatusBar'

const MemberList = () => {
  return (
    <s.Container>
      <StatusBar />
      <ContentHeader leftChild={<BackIcon />} rightChild={<ProfileIcon />} />
      <MemberListContent />
    </s.Container>
  )
}

export default MemberList

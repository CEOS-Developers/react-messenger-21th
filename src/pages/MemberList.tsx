import * as s from '../components/Common/Common.Styled'
import { StatusBar } from '../components/Common/Bar'
import MemberListContent from '../components/MemberList/MemberListContent'
import ContentHeader from '../components/Common/ContentHeader'
import { BackIcon, ProfileIcon } from '../assets/Icons/AppBar'

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

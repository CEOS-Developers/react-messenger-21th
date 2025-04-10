import * as s from '../components/common/Common.Styled'
import { StatusBar } from '../components/common/Bar'
import MemberListContent from '../components/MemberList/MemberListContent'
import ContentHeader from '../components/common/ContentHeader'
import { BackIcon, ProfileIcon } from '../assets/Icons/Header'

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

import StatusBar from '@/components/Common/StatusBar'
import MemberListContent from '@/components/MemberList/MemberListContent'

const MemberList = () => {
  return (
    <div className="wrapper">
      <StatusBar color="gray" />
      <MemberListContent />
    </div>
  )
}

export default MemberList

import { ProfileDefault } from '../../assets/Icons/Profile'

const MemberItem = ({
  id,
  name,
  profileColor,
  Btn,
  onClick,
}: {
  id: number
  name: string
  profileColor: string
  Btn?: React.ReactNode
  onClick: (id: number) => void
}) => {
  return (
    <div className="member-item justify-between" onClick={() => onClick(id)}>
      <ProfileDefault color={profileColor} />
      <div className="font-Body-1-b flex-1">{name}</div>
      <div className="pr-[14px]">{Btn}</div>
    </div>
  )
}

export default MemberItem

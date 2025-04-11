import * as s from './MemberItem.Styled'
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
    <s.MemberItem onClick={() => onClick(id)}>
      <ProfileDefault color={profileColor} />
      <s.MemberName>{name}</s.MemberName>
      <s.CheckBtn>{Btn}</s.CheckBtn>
    </s.MemberItem>
  )
}

export default MemberItem

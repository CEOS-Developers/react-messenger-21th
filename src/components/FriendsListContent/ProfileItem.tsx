import { ProfileDefault } from '../../assets/Icons/Profile'
import * as s from './ProfileItem.Styled'

const ProfileItem = ({
  id,
  name,
  profileMessage,
  profileColor,
}: {
  id: number
  name: string
  profileMessage: string
  profileColor: string
}) => {
  return (
    <s.Wapper>
      <s.Container>
        <ProfileDefault color={profileColor} />
        <s.TextContainer>
          <s.Name>{name}</s.Name>
          <s.Message $isR={true}>{profileMessage}</s.Message>
        </s.TextContainer>
      </s.Container>
    </s.Wapper>
  )
}

export default ProfileItem

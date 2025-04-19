import * as s from './ProfileInfo.Styled'
import { ProfileCircleBig } from '@/assets/Icons/Profile'
import ArrowRight from '@/assets/Icons/ProfileAction/right.svg?react'
import InfoEdit from '@/assets/Icons/ProfileAction/infoedit.svg?react'

const ProfileInfo = ({
  isMine,
  name,
  profileColor,
  profileMessage,
}: {
  isMine: boolean
  name: string
  profileColor: string
  profileMessage: string
}) => {
  return (
    <s.InfoContainer>
      <ProfileCircleBig color={profileColor} />
      <s.TextContainer>
        <s.NameContainer>
          <s.Name>{name}</s.Name>
          {isMine ? null : (
            <s.EditIcon>
              <InfoEdit />
            </s.EditIcon>
          )}
        </s.NameContainer>
        <s.MessageContainer>
          <s.Message $isR={true}>{profileMessage}</s.Message>
          <ArrowRight />
        </s.MessageContainer>
      </s.TextContainer>
    </s.InfoContainer>
  )
}

export default ProfileInfo

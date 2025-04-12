import { useNavigate, useParams } from 'react-router'

/** styles and icon */
import * as s from './ProfileContent.Styled'
import { ProfileIcon } from '../../assets/Icons/Header'
import X from '../../assets/Icons/Header/X.svg?react'
import { EventIcon } from '../common/Common.Styled'

/** components */
import ContentHeader from '../common/ContentHeader'
import ProfileInfo from './ProfileInfo'
import { FriendProfleAction, MyProfleAction } from './ProfileAction'

import { useUserStore } from '../../stores/useUserStore'
import findUser from '../../utils/findUser'

const ProfileContent = () => {
  const nav = useNavigate()
  const userId = Number(useParams().id)
  const { user } = useUserStore()
  const isMine = userId === user.id
  const curUser = findUser(userId)

  if (!curUser) return <div>존재하지 않는 유저</div>
  return (
    <s.Container>
      <ContentHeader
        leftChild={
          <EventIcon onClick={() => nav(-1)}>
            <X />
          </EventIcon>
        }
        rightChild={<ProfileIcon />}
      />
      <s.MainContent>
        <ProfileInfo
          isMine={isMine}
          name={curUser.name}
          profileColor={curUser.profileColor}
          profileMessage={curUser.profileMessage}
        />
        {isMine ? (
          <MyProfleAction />
        ) : (
          <FriendProfleAction snsUrl={curUser.snsUrl} id={userId} />
        )}
      </s.MainContent>
    </s.Container>
  )
}

export default ProfileContent

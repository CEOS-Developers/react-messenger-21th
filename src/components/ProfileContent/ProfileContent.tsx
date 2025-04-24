import { useParams } from 'react-router'

/** styles and icon */
import { ProfileIcon } from '@/assets/Icons/AppBar'
import { BackIconX } from '@/assets/Icons/AppBar'

/** components */
import ProfileInfo from './ProfileInfo'
import { FriendProfleAction, MyProfleAction } from './ProfileAction'

import { useUserStore } from '@/stores/useUserStore'
import { usePersistUserStore } from '@/stores/usePersistUserStore'

const ProfileContent = () => {
  const userId = Number(useParams().id)
  const { user } = useUserStore()
  const { getUserById } = usePersistUserStore()
  const isMine = userId === user.id
  const curUser = getUserById(userId)

  if (!curUser) return <div>존재하지 않는 유저</div>
  return (
    <div className="flex flex-grow flex-col justify-between">
      <div className="bg-gray02">
        <div className="app-bar">
          <BackIconX />
          <ProfileIcon />
        </div>
      </div>
      <div className="flex flex-col gap-[62px] py-[57px]">
        <ProfileInfo
          isMine={isMine}
          name={curUser.name}
          profileColor={curUser.profileColor}
          profileMessage={curUser.profileMessage}
        />
        {isMine ? (
          <MyProfleAction />
        ) : (
          <FriendProfleAction snsUrl={curUser.snsUrl ?? ''} id={userId} />
        )}
      </div>
    </div>
  )
}

export default ProfileContent

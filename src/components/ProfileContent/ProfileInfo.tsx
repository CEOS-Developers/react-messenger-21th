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
    <div className="flex flex-col items-center gap-3">
      <ProfileCircleBig color={profileColor} />
      <div className="flex flex-col items-center gap-1 text-white">
        <div className="relative flex items-center">
          <p className="font-Headline2">{name}</p>
          {isMine ? null : (
            <div className="absolute -right-[26px]">
              <InfoEdit />
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <p className="font-Body-2-r">{profileMessage}</p>
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo

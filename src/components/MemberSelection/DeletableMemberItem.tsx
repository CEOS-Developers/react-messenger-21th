import { ProfileCircleDefault } from '@/assets/Icons/Profile'
import XBtn from '@/assets/Icons/Profile/profile-x.svg?react'

const DeletableMemberItem = ({
  name,
  profileColor,
  onClick,
}: {
  name: string
  profileColor: string
  onClick: () => void
}) => {
  return (
    <div className="flex flex-col items-center gap-1 pt-1">
      <div className="relative">
        <div
          className="absolute -top-1 -right-1 cursor-pointer"
          onClick={onClick}>
          <XBtn />
        </div>
        <ProfileCircleDefault color={profileColor} />
      </div>
      <p className="text-gray09 font-Body-2-r">{name}</p>
    </div>
  )
}

export default DeletableMemberItem

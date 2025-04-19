import { useNavigate } from 'react-router'
import { ProfileCircleDefault } from '@/assets/Icons/Profile'
import PartitionItem from '../Common/PartitionItem'

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
  const nav = useNavigate()
  const onClickItem = () => nav(`/profile/${id}`)
  return (
    <PartitionItem profileColor={profileColor} onClick={onClickItem}>
      <div>
        <p className="font-Body-1-b">{name}</p>
        <p className="font-Body-2-r text-gray12 min-h-[21px]">
          {profileMessage}
        </p>
      </div>
    </PartitionItem>
  )
  return (
    <div
      className="flex cursor-pointer flex-col"
      onClick={() => nav(`/profile/${id}`)}>
      <div className="flex gap-3 py-2.5">
        <ProfileCircleDefault color={profileColor} />
        <div className="flex-1">
          <p className="font-Body-1-b">{name}</p>
          <p className="font-Body-2-r text-gray12 min-h-[21px]">
            {profileMessage}
          </p>
        </div>
      </div>
      <div className="partition"></div>
    </div>
  )
}

export default ProfileItem

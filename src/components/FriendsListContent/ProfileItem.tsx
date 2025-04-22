import { useNavigate } from 'react-router'
import PartitionItem from '../Commons/PartitionItem'

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
}

export default ProfileItem

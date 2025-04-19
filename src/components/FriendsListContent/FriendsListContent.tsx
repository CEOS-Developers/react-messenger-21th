import { useNavigate } from 'react-router'

import { HomeIcon } from '../../assets/Icons/AppBar'
import { ProfileDefault } from '../../assets/Icons/Profile'
import FriendsViewer from './FriendsViewer'

import { useUserStore } from '../../stores/useUserStore'
import findUser from '../../utils/findUser'

const FriendsListContent = () => {
  const { user } = useUserStore()
  const nav = useNavigate()

  const friendsData = user.friends
    .map((id) => {
      const friend = findUser(id)
      if (!friend) return null

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { friends, joinedRooms, ...rest } = friend
      return rest
    })
    .filter((friend) => friend !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'))

  return (
    <div className="container">
      <div className="pt-1">
        <div className="app-bar app-bar--62">
          <div
            className="cursor-pointer"
            onClick={() => nav(`/profile/${user.id}`)}>
            <div className="flex items-center gap-[9px]">
              <ProfileDefault color={user.profileColor} />
              <h2 className="font-Body-1-b">{user.name}</h2>
            </div>
          </div>
          <HomeIcon />
        </div>
      </div>

      <FriendsViewer friendsData={friendsData} />
    </div>
  )
}

export default FriendsListContent

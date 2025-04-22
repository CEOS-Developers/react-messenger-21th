import { useNavigate } from 'react-router'
import Favourite from './favourite.svg?react'
import Bell from './bell.svg?react'
import People from './people-plus.svg?react'
import Image from './image.svg?react'
import List from './list.svg?react'
import Setting from './setting.svg?react'
import Back from './back.svg?react'
import X from './X.svg?react'

const HomeIcon = () => {
  return (
    <div className="app-bar-icon-group">
      <Favourite />
      <Bell />
      <People />
      <Setting />
    </div>
  )
}

const ChatListIcon = () => {
  return (
    <div className="app-bar-icon-group">
      <List />
      <Image />
      <Setting />
    </div>
  )
}

const ChatRoomIcon = () => {
  const nav = useNavigate()
  return (
    <div className="cursor-pointer" onClick={() => nav('./members')}>
      <List />
    </div>
  )
}

const ProfileIcon = () => (
  <div>
    <Setting />
  </div>
)

const BackIcon = () => {
  const nav = useNavigate()
  return (
    <div className="cursor-pointer" onClick={() => nav(-1)}>
      <Back />
    </div>
  )
}

const BackIconX = () => {
  const nav = useNavigate()
  return (
    <div className="cursor-pointer" onClick={() => nav(-1)}>
      <X />
    </div>
  )
}

const CustomBackIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Back />
    </div>
  )
}

export {
  HomeIcon,
  ChatListIcon,
  ChatRoomIcon,
  ProfileIcon,
  BackIcon,
  BackIconX,
  CustomBackIcon,
}

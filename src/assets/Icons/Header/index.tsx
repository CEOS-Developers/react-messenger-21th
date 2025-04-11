import styled from 'styled-components'
import Favourite from './favourite.svg?react'
import Bell from './bell.svg?react'
import People from './people-plus.svg?react'
import Image from './image.svg?react'
import List from './list.svg?react'
import Setting from './setting.svg?react'
import Back from './back.svg?react'
import X from './X.svg?react'
import { EventIcon } from '../../../components/common/Common.Styled'
import { useNavigate } from 'react-router'

const HomeIcon = () => {
  return (
    <IconGroup>
      <Favourite />
      <Bell />
      <People />
      <Setting />
    </IconGroup>
  )
}

const ChatListIcon = () => {
  return (
    <IconGroup>
      <List />
      <Image />
      <Setting />
    </IconGroup>
  )
}

const ChatRoomIcon = () => {
  const nav = useNavigate()
  return (
    <EventIcon onClick={() => nav('./members')}>
      <List />
    </EventIcon>
  )
}

const ProfileIcon = () => (
  <IconGroup>
    <Setting />
  </IconGroup>
)

const BackIcon = () => {
  const nav = useNavigate()
  return (
    <EventIcon onClick={() => nav(-1)}>
      <Back />
    </EventIcon>
  )
}

const BackIconX = () => {
  const nav = useNavigate()
  return (
    <EventIcon onClick={() => nav(-1)}>
      <X />
    </EventIcon>
  )
}

const IconGroup = styled.div`
  display: flex;
  gap: 12px;
`

export {
  HomeIcon,
  ChatListIcon,
  ChatRoomIcon,
  ProfileIcon,
  BackIcon,
  BackIconX,
}

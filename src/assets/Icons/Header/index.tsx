import styled from 'styled-components'
import Favourite from './favourite.svg?react'
import Bell from './bell.svg?react'
import People from './people-plus.svg?react'
import Image from './image.svg?react'
import List from './list.svg?react'
import Setting from './setting.svg?react'

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
  return (
    <IconGroup>
      <List />
      <Setting />
    </IconGroup>
  )
}

const ProfileIcon = () => (
  <IconGroup>
    <Setting />
  </IconGroup>
)

const IconGroup = styled.div`
  display: flex;
  gap: 12px;
`

export { HomeIcon, ChatListIcon, ChatRoomIcon, ProfileIcon }

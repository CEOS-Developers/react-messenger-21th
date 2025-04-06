import * as s from './ProfileAction.Styled'

import Edit from '../../assets/Icons/ProfileAction/edit.svg?react'
import Keep from '../../assets/Icons/ProfileAction/keep.svg?react'
import Star from '../../assets/Icons/ProfileAction/star.svg?react'

import Chat from '../../assets/Icons/ProfileAction/chat.svg?react'
import Phonecall from '../../assets/Icons/ProfileAction/phonecall.svg?react'
import Instagram from '../../assets/Icons/ProfileAction/instagram.svg?react'
import { EventIcon } from '../common/Common.Styled'

const MyProfleAction = () => {
  return (
    <s.Container>
      <Edit />
      <Star />
      <Keep />
    </s.Container>
  )
}
const FriendProfleAction = ({ snsUrl }: { snsUrl: string }) => {
  return (
    <s.Container>
      <EventIcon>
        <Chat />
      </EventIcon>
      <Phonecall />
      {snsUrl.trim() ? (
        <EventIcon>
          <a href={snsUrl} target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </EventIcon>
      ) : (
        <Instagram />
      )}
    </s.Container>
  )
}

export { MyProfleAction, FriendProfleAction }

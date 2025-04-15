import * as s from './MemberListContent.Styled'
import Plus from '../../assets/Icons/List/plus.svg?react'
import { useUserStore } from '../../stores/useUserStore'
import {
  MultipleProfileDefault,
  ProfileDefault,
} from '../../assets/Icons/Profile'
import { useChatRoomStore } from '../../stores/useChatRoomStore'
import { useNavigate, useParams } from 'react-router'
import { getMemberArray } from '../../utils/getMemberList'
import getRoomName from '../../utils/getRoomName'
import MemberItem from '../MemberItem/MemberItem'
import { BackIcon, ProfileIcon } from '@/assets/Icons/AppBar'

const MemberListContent = () => {
  const nav = useNavigate()
  const { user, leaveChatRoom } = useUserStore()
  const { chatRoom, removeChatRoom } = useChatRoomStore()
  const roomId = Number(useParams().id)
  const room = chatRoom?.find((room) => room.chatRoomId === roomId)
  const memberIds = room?.member.filter(
    (memberId: number) => memberId !== user.id
  )

  const memberCount = room?.member.length

  const memberData =
    memberIds &&
    getMemberArray(memberIds).sort((a, b) =>
      a.name.localeCompare(b.name, 'ko-KR')
    )

  const colors = memberData
    ?.slice(0, 4)
    .map((member) => member.profileColor) || [
    'gray04',
    'gray04',
    'gray04',
    'gray04',
  ]

  const onClickOutButton = () => {
    if (!window.confirm('정말 나가시겠습니까?')) return
    leaveChatRoom(roomId)
    removeChatRoom(roomId)
    nav('/chatList', { replace: true })
  }
  return (
    <div className="flex-grow">
      <div className="bg-white">
        <div className="app-bar">
          <BackIcon />
          <ProfileIcon />
        </div>
      </div>
      <s.Wrapper>
        <s.RoomNameSection>
          <MultipleProfileDefault colors={colors} />
          <s.TitleContainer>
            <s.RoomName>
              {room?.roomName || (memberIds && getRoomName(memberIds))}
            </s.RoomName>
            <s.MemberCount $isM={true}>{memberCount}</s.MemberCount>
          </s.TitleContainer>
        </s.RoomNameSection>
        <s.Section>
          <s.MemberNum>멤버 {memberCount}</s.MemberNum>
          <s.MemberList>
            <s.MemberItem>
              <Plus />
              <s.MemberName>친구 초대하기</s.MemberName>
            </s.MemberItem>
            <s.MemberItem
              onClick={() => nav(`/profile/${user.id}`)}
              key={user.id}>
              <ProfileDefault color={user.profileColor} />
              <s.MemberName>{user.name}</s.MemberName>
              <s.MeTag $isM={true}>나</s.MeTag>
            </s.MemberItem>
            {memberData?.map((member) => (
              <MemberItem
                id={member.id}
                key={member.id}
                name={member.name}
                profileColor={member.profileColor}
                onClick={(id) => nav(`/profile/${id}`)}
              />
            ))}
          </s.MemberList>
        </s.Section>

        <s.Section>
          <s.Button
            $isM={true}
            onClick={() =>
              nav('./selection', {
                state: {
                  memberData,
                },
              })
            }>
            유저 변경하기
          </s.Button>
          <s.OutButton $isM={true} onClick={onClickOutButton}>
            채팅방 나가기
          </s.OutButton>
        </s.Section>
      </s.Wrapper>
    </div>
  )
}

export default MemberListContent

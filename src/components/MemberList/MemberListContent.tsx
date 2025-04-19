import { useNavigate, useParams } from 'react-router'

import MemberItem from './MemberItem'
import SquareButton from './SquareButton'
import Plus from '@/assets/Icons/List/plus.svg?react'
import { MultipleProfileDefault, ProfileDefault } from '@/assets/Icons/Profile'
import { BackIcon, ProfileIcon } from '@/assets/Icons/AppBar'

import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { getMemberArray } from '@/utils/getMemberList'
import getRoomName from '@/utils/getRoomName'

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
    <div className="bg-gray03 container">
      <div className="bg-gray02 pb-1">
        <div className="app-bar">
          <BackIcon />
          <ProfileIcon />
        </div>
      </div>

      <div className="scroll-container flex flex-col gap-8 p-5">
        <div className="flex-center list">
          <MultipleProfileDefault colors={colors} />
          <div className="flex items-center gap-1.5">
            <h1 className="font-Headline3 ellipsis max-w-[305px]">
              {room?.roomName || (memberIds && getRoomName(memberIds))}
            </h1>
            <div className="font-Subhead-m text-gray10">{memberCount}</div>
          </div>
        </div>

        <div className="list">
          <div className="font-Body-2-b text-black">멤버 {memberCount}</div>

          <div className="flex flex-col gap-[18px]">
            <div className="member-item">
              <Plus />
              <div className="font-Body-1-b">친구 초대하기</div>
            </div>

            <div
              className="member-item"
              onClick={() => nav(`/profile/${user.id}`)}
              key={user.id}>
              <ProfileDefault color={user.profileColor} />
              <div className="font-Body-1-b">{user.name}</div>
              <div className="font-Body-2-m flex-center bg-gray08 h-6 w-6 rounded-full text-white">
                나
              </div>
            </div>

            {memberData?.map((member) => (
              <MemberItem
                id={member.id}
                key={member.id}
                name={member.name}
                profileColor={member.profileColor}
                onClick={(id) => nav(`/profile/${id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="list p-5">
        <SquareButton
          text="유저 변경하기"
          isOut={false}
          onClick={() =>
            nav('./selection', {
              state: {
                memberData,
              },
            })
          }
        />
        <SquareButton
          text="채팅방 나가기"
          isOut={true}
          onClick={onClickOutButton}
        />
      </div>
    </div>
  )
}

export default MemberListContent

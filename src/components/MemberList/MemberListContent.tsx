import { useNavigate, useParams } from 'react-router'

import MemberItem from './MemberItem'
import SquareButton from './SquareButton'
import Plus from '@/assets/Icons/List/plus.svg?react'
import {
  MultipleProfileDefault,
  ProfileCircleDefault,
} from '@/assets/Icons/Profile'
import { BackIcon, ProfileIcon } from '@/assets/Icons/AppBar'

import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { getMemberArray } from '@/utils/getMemberList'
import getRoomName from '@/utils/getRoomName'
import { usePersistChatRoomStore } from '@/stores/usePersistChatRoomStore'
import { SYSTEM_ID } from '@/utils/constants'

const MemberListContent = () => {
  const nav = useNavigate()
  const { user, leaveChatRoom } = useUserStore()
  const { chatRoom, removeUserChatRoom, addChat } = useChatRoomStore()
  const { removeMember } = usePersistChatRoomStore()
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

  const memberColors =
    memberCount === 1
      ? ['gray']
      : memberData?.slice(0, 4).map((member) => member.profileColor)

  const onClickOutButton = () => {
    if (!window.confirm('정말 나가시겠습니까?')) return

    const newChat = {
      id: Date.now(),
      sender: SYSTEM_ID,
      content: `${user.name}님이 나가셨습니다.`,
    }
    addChat(roomId, newChat)
    leaveChatRoom(roomId)
    removeUserChatRoom(roomId)
    removeMember(roomId, user.id)
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
          {memberCount && memberCount <= 2
            ? memberColors && <ProfileCircleDefault color={memberColors[0]} />
            : memberColors && <MultipleProfileDefault colors={memberColors} />}
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
            <div
              className="member-item"
              onClick={() =>
                nav('./invite', {
                  state: {
                    memberIds,
                  },
                })
              }>
              <Plus />
              <div className="font-Body-1-b">친구 초대하기</div>
            </div>

            <div
              className="member-item"
              onClick={() => nav(`/profile/${user.id}`)}
              key={user.id}>
              <ProfileCircleDefault color={user.profileColor} />
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
            nav('./change', {
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

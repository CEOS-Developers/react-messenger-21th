import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { SYSTEM_ID } from '@/utils/constants'
import getRoomName from '@/utils/getRoomName'
import findUser from '@/utils/findUser'

import ActionBar from '../Commons/ActionBar'
import DeletableMemberItem from '../MemberSelection/DeletableMemberItem'
import GroupItem from './GroupItem'
import { ProfileCircleBig, ProfileCircleDefault } from '@/assets/Icons/Profile'
import Camera from '@/assets/Icons/List/camera.svg?react'
import Plus from '@/assets/Icons/List/plus.svg?react'
import Reset from '@/assets/Icons/List/group-x.svg?react'
import { CustomBackIcon } from '@/assets/Icons/AppBar'

interface FriendType {
  id: number
  name: string
  profileColor: string
}

const SettingContent = () => {
  const nav = useNavigate()
  const selectedIds_ = useLocation().state.selectedIds

  /* state */
  const [selectedIds, setSelectedIds] = useState<number[]>(selectedIds_)
  const [roomName, setRoomName] = useState('')
  const friendsData = selectedIds
    .map((id_: number) => {
      const friend = findUser(id_)
      if (!friend) return null

      const { id, name, profileColor } = friend
      return { id, name, profileColor }
    })
    .filter((friend) => friend !== null)

  /* store */
  const { user, enterChatRoom, updateLastSeenTime } = useUserStore()
  const { chatRoomRef, createChatRoom, addChat } = useChatRoomStore()
  const friendNames = getRoomName(selectedIds)
  const member = [user.id, ...selectedIds]

  const handleCreateGroups = () => {
    const newChat = {
      id: Date.now(),
      sender: SYSTEM_ID,
      content: `${user.name}님이 ${friendNames}님을 그룹에 추가했습니다.`,
    }

    createChatRoom(chatRoomRef, member, roomName)
    enterChatRoom(chatRoomRef)
    updateLastSeenTime(chatRoomRef)
    addChat(chatRoomRef, newChat)
    return nav(`/room/${chatRoomRef}`, {
      state: {
        roomName: roomName,
        member: member,
        memberCount: member.length,
      },
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value)
  }

  const handleReset = () => {
    setRoomName('')
  }

  const handleDeleteGroupMember = (id: number) => {
    const newIds = selectedIds.filter((id_) => id_ !== id)
    setSelectedIds(newIds)
  }

  const handleBack = () => {
    nav('/group', { state: { selectedIds }, replace: true })
  }

  return (
    <div className="container">
      <div className="bg-white">
        <ActionBar
          backIcon={<CustomBackIcon onClick={handleBack} />}
          title="그룹 프로필 설정"
          isActive={true}
          nextText="만들기"
          onClick={handleCreateGroups}
        />
      </div>
      <div className="font-Body-1-m flex items-center gap-4 px-5 pt-[18px] pb-2.5">
        <div className="relative">
          <ProfileCircleBig color="skyblue" />
          <div className="absolute right-0 bottom-0">
            <Camera />
          </div>
        </div>
        <div className="flex h-full flex-col">
          <p
            className={`font-Caption-m text-gray06 self-end pb-2.5 ${roomName.length === 0 && 'invisible'}`}>
            {roomName.length}/20
          </p>
          <div className="flex items-center gap-1">
            <input
              maxLength={20}
              onChange={handleInputChange}
              value={roomName}
              className="h-12 max-w-[197px] break-words whitespace-normal outline-none"
              placeholder={friendNames}
            />
            <div className="cursor-pointer" onClick={handleReset}>
              {roomName.length > 0 && <Reset />}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 pt-2.5">
        <p className="font-Body-2-b px-5 py-2.5">멤버 {member.length}</p>
        <div className="scrollbar-none flex flex-wrap gap-5 overflow-auto px-5">
          <GroupItem text="추가" onClick={handleBack}>
            <Plus />
          </GroupItem>
          <GroupItem text={user.name}>
            <ProfileCircleDefault color={user.profileColor} />
          </GroupItem>
          {friendsData &&
            friendsData.map(({ id, name, profileColor }: FriendType) => (
              <DeletableMemberItem
                key={id}
                name={name}
                profileColor={profileColor}
                onClick={() => handleDeleteGroupMember(id)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default SettingContent

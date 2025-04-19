import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

import ActionBar from '../Common/ActionBar'
import SearchBox from '../Common/SearchBox'
import MemberItem from '../MemberList/MemberItem'
import { BackIconX } from '@/assets/Icons/AppBar'
import CheckBox from '@/assets/Icons/Checkbox/checkbox.svg?react'
import CheckedBox from '@/assets/Icons/Checkbox/checkbox_checked.svg?react'

import { useUserStore } from '@/stores/useUserStore'
import findUser from '@/utils/findUser'
import { filterByName } from '@/utils/filterByName'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import getRoomName from '@/utils/getRoomName'
import { SYSTEM_ID } from '@/utils/constants'

const CheckboxSelection = () => {
  const nav = useNavigate()
  const roomId = Number(useParams().id)
  const location = useLocation()
  const memberIds = location.state?.memberIds || []
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [searchText, setSearchText] = useState('')

  const { user, updateLastSeenTime } = useUserStore()
  const { addChat, addMember } = useChatRoomStore()

  /* 친구 중 이 채팅방에 없는 친구 목록 불러오기 */
  const friendsData = user.friends
    .map((id_) => {
      const friend = findUser(id_)
      if (!friend || memberIds.includes(friend.id)) return null

      const { id, name, profileColor } = friend
      return { id, name, profileColor }
    })
    .filter((friend) => friend !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'))

  /* 이름 검색 */
  const filteredFriends = filterByName(friendsData, searchText)

  /* 상태에 체크박스 토글 반영 */
  const handleClickMemberItem = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleInviteFriends = () => {
    const friendNames = getRoomName(selectedIds)
    const newChat = {
      id: Date.now(),
      sender: SYSTEM_ID,
      content: `${user.name}님이 ${friendNames}님을 그룹에 추가했습니다.`,
    }
    updateLastSeenTime(roomId)
    addChat(roomId, newChat)
    addMember(roomId, selectedIds)
    nav(-2)
  }

  return (
    <div className="container gap-4">
      <div className="bg-white">
        <ActionBar
          backIcon={<BackIconX />}
          title="멤버 선택"
          isActive={selectedIds.length !== 0}
          nextText="다음"
          onClick={handleInviteFriends}
        />
      </div>
      <div className="px-5">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="scroll-container list">
        <div className="font-Body-2-b py-2.5 text-black">
          친구 {filteredFriends.length}
        </div>
        {filteredFriends?.map(({ id, name, profileColor }) => (
          <div className="flex flex-col" key={id}>
            <MemberItem
              id={id}
              name={name}
              profileColor={profileColor}
              Btn={selectedIds.includes(id) ? <CheckedBox /> : <CheckBox />}
              onClick={handleClickMemberItem}
            />
            <div className="partition"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxSelection

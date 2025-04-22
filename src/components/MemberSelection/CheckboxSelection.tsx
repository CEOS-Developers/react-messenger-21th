import { useState } from 'react'
import { useLocation } from 'react-router'

import ActionBar from '../Commons/ActionBar'
import SearchBox from '../Commons/SearchBox'
import PartitionItem from '../Commons/PartitionItem'
import HorizontalScrollContainer from './HorizontalScrollContainer'
import { CustomBackIcon } from '@/assets/Icons/AppBar'
import CheckBox from '@/assets/Icons/Checkbox/checkbox.svg?react'
import CheckedBox from '@/assets/Icons/Checkbox/checkbox_checked.svg?react'

import { useUserStore } from '@/stores/useUserStore'
import findUser from '@/utils/findUser'
import { filterByName } from '@/utils/filterByName'

const CheckboxSelection = ({
  handleNextAction,
  handleBackAction,
}: {
  handleNextAction: (selectedIds: number[]) => void
  handleBackAction: () => void
}) => {
  const location = useLocation()
  const memberIds = location.state?.memberIds || []
  const selectedIds_ = location.state?.selectedIds || []
  const [selectedIds, setSelectedIds] = useState<number[]>(selectedIds_)
  const [searchText, setSearchText] = useState('')

  const { user } = useUserStore()

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

  return (
    <div className="container">
      <div className="bg-white">
        <ActionBar
          backIcon={<CustomBackIcon onClick={handleBackAction} />}
          title="멤버 선택"
          isActive={selectedIds.length !== 0}
          nextText="다음"
          onClick={() => handleNextAction(selectedIds)}
        />
      </div>

      <HorizontalScrollContainer
        selectedIds={selectedIds}
        friendsData={friendsData}
        handleClickMemberItem={handleClickMemberItem}
      />

      <div className="px-5 pb-2">
        <SearchBox searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div
        className={`scroll-container list ${selectedIds.length === 0 && 'pt-2'}`}>
        <div className="font-Body-2-b py-2.5 text-black">
          친구 {filteredFriends.length}
        </div>
        {filteredFriends?.map(({ id, name, profileColor }) => (
          <PartitionItem
            key={id}
            profileColor={profileColor}
            onClick={() => handleClickMemberItem(id)}>
            <div className="flex py-[11px] pr-[14px]">
              <p className="font-Body-1-b flex-1">{name}</p>
              {selectedIds.includes(id) ? <CheckedBox /> : <CheckBox />}
            </div>
          </PartitionItem>
        ))}
      </div>
    </div>
  )
}

export default CheckboxSelection

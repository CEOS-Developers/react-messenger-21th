import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import ActionBar from '../Commons/ActionBar'
import { BackIconX } from '@/assets/Icons/AppBar'
import CheckBox from '@/assets/Icons/Checkbox/checkbox.svg?react'
import Radio from '@/assets/Icons/Checkbox/checkbox_radio.svg?react'

import { MemberArrayType } from '@/utils/getMemberList'
import setUserAndChatRoom from '@/utils/setUserAndChatRoom'
import PartitionItem from '../Commons/PartitionItem'
import { usePersistUserStore } from '@/stores/usePersistUserStore'

const RadioSelection = () => {
  const [selectedId, setSelectedId] = useState(-1)
  const { memberData } = useLocation().state
  const { setCurUser } = usePersistUserStore()
  const nav = useNavigate()

  const onClickMemberItem = (id: number) => {
    setSelectedId(id)
  }

  const onClickConfirm = () => {
    setCurUser(selectedId)
    setUserAndChatRoom(selectedId)
    nav(-2)
  }

  return (
    <div className="bg-gray02 container">
      <div className="bg-white">
        <ActionBar
          backIcon={<BackIconX />}
          title="멤버 선택"
          nextText="확인"
          onClick={onClickConfirm}
          isActive={selectedId !== -1}
        />
      </div>
      <div className="font-Body-2-m text-gray09 pt-4 pb-2 text-center">
        멤버 중 1명을 선택해 주세요.
      </div>
      <div className="scroll-container list px-5">
        {memberData?.map(({ id, name, profileColor }: MemberArrayType) => (
          <PartitionItem
            key={id}
            profileColor={profileColor}
            onClick={() => onClickMemberItem(id)}>
            <div className="flex py-[11px] pr-[14px]">
              <p className="font-Body-1-b flex-1">{name}</p>
              {selectedId === id ? <Radio /> : <CheckBox />}
            </div>
          </PartitionItem>
        ))}
      </div>
    </div>
  )
}

export default RadioSelection

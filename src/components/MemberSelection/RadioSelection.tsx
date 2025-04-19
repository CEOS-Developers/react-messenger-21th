import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import ActionBar from '../Common/ActionBar'
import MemberItem from '../MemberList/MemberItem'
import { BackIconX } from '@/assets/Icons/AppBar'
import CheckBox from '@/assets/Icons/Checkbox/checkbox.svg?react'
import Radio from '@/assets/Icons/Checkbox/checkbox_radio.svg?react'

import { MemberArrayType } from '@/utils/getMemberList'
import setUserAndChatRoom from '@/utils/setUserAndChatRoom'

const RadioSelection = () => {
  const [selectedId, setSelectedId] = useState(-1)
  const { memberData } = useLocation().state
  const nav = useNavigate()

  const onClickMemberItem = (id: number) => {
    setSelectedId(id)
  }

  const onClickConfirm = () => {
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
        {memberData?.map((member: MemberArrayType) => (
          <div className="flex flex-col" key={member.id}>
            <MemberItem
              id={member.id}
              name={member.name}
              profileColor={member.profileColor}
              Btn={selectedId === member.id ? <Radio /> : <CheckBox />}
              onClick={onClickMemberItem}
            />
            <div className="partition"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioSelection

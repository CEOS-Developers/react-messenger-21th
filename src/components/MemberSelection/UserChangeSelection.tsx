import { useState } from 'react'
import { BackIconX } from '../../assets/Icons/AppBar'
import * as s from './UserChangeSelection.Styled'
import { useLocation, useNavigate } from 'react-router'
import { MemberArrayType } from '../../utils/getMemberList'
import MemberItem from '../MemberItem/MemberItem'

import CheckBox from '../../assets/Icons/Checkbox/checkbox.svg?react'
import Radio from '../../assets/Icons/Checkbox/checkbox_radio.svg?react'
import setUserAndChatRoom from '../../utils/setUserAndChatRoom'
import ActionBar from '../Common/ActionBar'

const UserChangeSelection = () => {
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
    <s.Wrapper>
      <div className="bg-white">
        <ActionBar
          backIcon={<BackIconX />}
          title="멤버 선택"
          nextText="확인"
          onClick={onClickConfirm}
          isActive={selectedId !== -1}
        />
      </div>
      <s.Description $isR={true}>멤버 중 1명을 선택해 주세요.</s.Description>
      <s.MemberList>
        {memberData?.map((member: MemberArrayType) => (
          <s.ItemContainer key={member.id}>
            <MemberItem
              id={member.id}
              name={member.name}
              profileColor={member.profileColor}
              Btn={selectedId === member.id ? <Radio /> : <CheckBox />}
              onClick={onClickMemberItem}
            />
            <s.Partition />
          </s.ItemContainer>
        ))}
      </s.MemberList>
    </s.Wrapper>
  )
}

export default UserChangeSelection

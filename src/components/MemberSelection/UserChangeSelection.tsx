import { useState } from 'react'
import { BackIconX } from '../../assets/Icons/Header'
import { MemberSelectionAppBar } from '../common/ContentHeader'
import * as s from './UserChangeSelection.Styled'
import { useLocation } from 'react-router'
import { MemberArrayType } from '../../utils/getMemberList'
import MemberItem from '../MemberItem/MemberItem'

import CheckBox from '../../assets/Icons/Checkbox/checkbox.svg?react'
import Radio from '../../assets/Icons/Checkbox/checkbox_radio.svg?react'

const UserChangeSelection = () => {
  const [selectedId, setSelectedId] = useState(-1)
  const { memberData } = useLocation().state

  const onClickMemberItem = (id: number) => {
    setSelectedId(id)
  }
  return (
    <s.Wrapper>
      <MemberSelectionAppBar
        backIcon={<BackIconX />}
        nextText="확인"
        $isActive={selectedId !== -1}
      />
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

import { EventIcon } from './Common.Styled'
import * as s from './ContentHeader.Styled'

export const MemberSelectionAppBar = ({
  backIcon,
  nextText,
  onClick,
  $isTransparent = false,
  $isActive,
}: {
  backIcon: React.ReactNode
  nextText: string
  onClick: () => void
  $isTransparent?: boolean
  $isActive: boolean
}) => {
  return (
    <s.MemberSelectionDiv $isTransparent={$isTransparent}>
      {backIcon}
      <s.Title>멤버 선택</s.Title>
      <EventIcon onClick={onClick}>
        <s.NextText $isActive={$isActive} $isM={true}>
          {nextText}
        </s.NextText>
      </EventIcon>
    </s.MemberSelectionDiv>
  )
}

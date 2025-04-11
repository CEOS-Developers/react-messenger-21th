import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_1 } from '../../styles/Typo.Styled'

const MemberItem = styled.li`
  display: flex;
  gap: 12px;
  justify-content: space-between;

  align-items: center;
  cursor: pointer;
`

const MemberName = styled.p<StyledProps>`
  ${Body_1}
  color: ${({ theme }) => theme.colors.gray13};
  flex-grow: 1;
`

const CheckBtn = styled.div`
  padding-right: 14px;
`

export { MemberItem, MemberName, CheckBtn }

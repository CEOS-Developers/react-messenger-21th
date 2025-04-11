import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_1, Headline3 } from '../../styles/Typo.Styled'

const HeaderDiv = styled.div<StyledProps>`
  background-color: ${({ $isTransparent, theme }) =>
    $isTransparent ? 'transparent' : theme.colors.gray02};
  padding: 0px ${({ theme }) => theme.phoneGrid.margin};

  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MemberSelectionDiv = styled(HeaderDiv)`
  background-color: ${({ theme }) => theme.colors.white};
`

const Title = styled.h1`
  ${Headline3}
  color: ${({ theme }) => theme.colors.gray13};
`

const NextText = styled.div<StyledProps>`
  ${Body_1}
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.blue : theme.colors.gray06};
`
export { HeaderDiv, MemberSelectionDiv, Title, NextText }

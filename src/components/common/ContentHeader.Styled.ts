import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'

const HeaderDiv = styled.div<StyledProps>`
  background-color: ${({ $isTransparent, theme }) =>
    $isTransparent ? 'transparent' : theme.colors.gray02};
  padding: 0px ${({ theme }) => theme.phoneGrid.margin};

  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export { HeaderDiv }

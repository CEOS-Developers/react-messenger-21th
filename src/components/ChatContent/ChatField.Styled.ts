import styled from 'styled-components'
import { Caption } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/styledProps'

//isM = true
const DateDiv = styled.div<StyledProps>`
  color: ${({ theme }) => theme.colors.gray09};
  ${Caption}

  width: 138px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray07};

  display: flex;
  align-items: center;
  justify-content: center;
`

export { DateDiv }

import styled from 'styled-components'
import { Caption } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const Wrapper = styled.div``

const Section = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray04};
  padding: 20px 0;
`

const Keyword = styled.div<StyledProps>`
  ${Caption}
  color: ${({ theme }) => theme.colors.gray09};
  padding-bottom: 10px;
`

const Result = styled.div<StyledProps>`
  ${Caption}
  color: ${({ theme }) => theme.colors.gray07};
`

export { Wrapper, Section, Keyword, Result }

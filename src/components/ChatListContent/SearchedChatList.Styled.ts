import styled from 'styled-components'
import { Body_2 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled(ColumnContainer)`
  gap: 8px;
`

const Section = styled(ColumnContainer)`
  gap: 4px;
`

const ChatContainer = styled(ColumnContainer)`
  gap: 16px;
`

const Keyword = styled.div<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  padding: 10px 0px;
`

const Result = styled.div<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  align-self: center;
`

export { Wrapper, Section, ChatContainer, Keyword, Result }

import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Headline3, Subhead } from '../../styles/Typo.Styled'

const ChatTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const ChatName = styled.h1`
  ${Headline3}
  max-width: 189px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.gray13};
  padding-left: 8px;
  padding-right: 6px;
`

const MemberNum = styled.span<StyledProps>`
  ${Subhead}
  color: ${({ theme }) => theme.colors.gray10};
`
export { ChatTitleContainer, ChatName, MemberNum }

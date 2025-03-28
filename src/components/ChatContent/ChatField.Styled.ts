import styled from 'styled-components'
import { Body_2, Caption } from '../../styles/Typo.Styled'
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
  margin: 24px auto;
`

// $isR = true
const ChatDiv = styled.div`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  background: ${({ $isMe, theme }) =>
    $isMe ? theme.colors.mainLime : theme.colors.gray02};
  border: 1px solid ${({ theme }) => theme.colors.gray11};
  border-radius: ${({ $isMe }) =>
    $isMe ? '9px 0px 9px 9px' : '0px 9px 9px 9px'};

  max-width: 248px;
  padding: 8px;
  ${({ $isMe }) => ($isMe ? 'margin-left: auto;' : 'margin-right: auto;')};
`

export { DateDiv, ChatDiv }

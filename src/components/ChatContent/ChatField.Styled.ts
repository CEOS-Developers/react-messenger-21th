import styled, { css } from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_2 } from '../../styles/Typo.Styled'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const ChatBubbleContainer = styled.div<StyledProps>`
  display: flex;
  align-items: end;
  gap: 4px;
  align-self: ${({ $isMe }) => ($isMe ? 'flex-end' : 'flex-start')};
  margin-bottom: ${({ $needBigMargin, $isNextSender }) =>
    $needBigMargin ? ($isNextSender ? '16px' : '20px') : '8px'};
`

const ChatDiv = styled.div<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  border: 1px solid ${({ theme }) => theme.colors.gray11};

  max-width: 232px;
  padding: 8px;
  ${({ $isMe }) => ($isMe ? myChatStyle : othersChatStyle)}
`

const myChatStyle = css`
  background: ${({ theme }) => theme.colors.mainLime};
  border-radius: 4px 0px 4px 4px;
`

const othersChatStyle = css`
  background: ${({ theme }) => theme.colors.gray02};
  border-radius: 0px 4px 4px 4px;
  margin-left: 30px;
`

export { ChatContainer, ChatBubbleContainer, ChatDiv }

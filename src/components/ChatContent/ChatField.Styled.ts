import styled, { css } from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_2, Caption, ChatTime } from '../../styles/Typo.Styled'

const ChatFieldWrapper = styled.div`
  padding: 0px 20px;
  max-height: 626px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

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
  margin-bottom: ${({ $souldDisplayTime }) =>
    $souldDisplayTime ? '20px' : '8px'};
`

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
  margin: 24px auto 20px auto;
`

const FirstDateDiv = styled(DateDiv)`
  margin: 16px auto 24px auto;
`

const Icon = styled.div`
  margin-top: 9px;
`
const Name = styled.div<StyledProps>`
  color: ${({ theme }) => theme.colors.gray11};
  ${Caption}
`

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
  border-radius: 9px 0px 9px 9px;
`

const othersChatStyle = css`
  background: ${({ theme }) => theme.colors.gray02};
  border-radius: 0px 9px 9px 9px;
  margin-left: 30px;
`

const TimeDiv = styled.div`
  color: ${({ theme }) => theme.colors.gray09};
  ${ChatTime}
  white-space: nowrap;
`

export {
  ChatFieldWrapper,
  ChatContainer,
  ChatBubbleContainer,
  DateDiv,
  FirstDateDiv,
  ChatDiv,
  Icon,
  Name,
  ProfileContainer,
  TimeDiv,
}

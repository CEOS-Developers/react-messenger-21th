import styled, { css } from 'styled-components'
import { Body_2, Caption } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/styledProps'

const ChatFieldWrapper = styled.div`
  padding: 0px 20px;
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
  margin: 24px auto;
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

  max-width: 248px;
  padding: 8px;
  ${({ $isMe }) => ($isMe ? myChatStyle : othersChatStyle)}
`

const myChatStyle = css`
  background: ${({ theme }) => theme.colors.mainLime};
  border-radius: 9px 0px 9px 9px;
  margin-left: auto;
`

const othersChatStyle = css`
  background: ${({ theme }) => theme.colors.gray02};
  border-radius: 0px 9px 9px 9px;
  margin-right: auto;
`

export { ChatFieldWrapper, DateDiv, ChatDiv, Icon, Name, ProfileContainer }

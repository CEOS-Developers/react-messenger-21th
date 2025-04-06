import styled from 'styled-components'
import { Body_2, Headline2 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const Name = styled.p`
  ${Headline2}
`

const Message = styled.p<StyledProps>`
  ${Body_2}
`

const NameContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const EditIcon = styled.div`
  position: absolute;
  right: -26px;
`

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export {
  InfoContainer,
  TextContainer,
  Name,
  Message,
  NameContainer,
  MessageContainer,
  EditIcon,
}

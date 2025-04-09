import styled from 'styled-components'
import { Body_1, Body_2 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const Wapper = styled.div`
  height: 66px;
  cursor: pointer;
`

const Container = styled.div`
  padding: 10px 0;

  display: flex;
  gap: 12px;
`

const TextContainer = styled.div`
  width: 277px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray04};
`

const Name = styled.p<StyledProps>`
  ${Body_1}
  color: ${({ theme }) => theme.colors.gray13};
`

const Message = styled.p<StyledProps>`
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray12};
  padding-bottom: 10px;
  min-height: 21px;
`

export { Wapper, Container, TextContainer, Name, Message }

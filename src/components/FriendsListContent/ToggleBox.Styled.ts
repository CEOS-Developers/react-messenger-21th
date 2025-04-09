import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_2 } from '../../styles/Typo.Styled'

const Container = styled.div`
  height: 41px;
  padding-bottom: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextContainer = styled.div<StyledProps>`
  ${Body_2}
`

const IconContainer = styled.div`
  cursor: pointer;
`

export { Container, TextContainer, IconContainer }

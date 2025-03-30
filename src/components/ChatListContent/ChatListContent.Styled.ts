import styled from 'styled-components'
import { Headline2 } from '../../styles/Typo.Styled'

const Title = styled.div`
  ${Headline2}
  color: ${({ theme }) => theme.colors.gray13}
`

export { Title }

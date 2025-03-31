import styled from 'styled-components'
import { Headline2 } from '../../styles/Typo.Styled'
import { Content } from '../common/Common.Styled'

const CLContent = styled(Content)`
  gap: 16px;
`

const Title = styled.div`
  ${Headline2}
  color: ${({ theme }) => theme.colors.gray13}
`

export { CLContent, Title }

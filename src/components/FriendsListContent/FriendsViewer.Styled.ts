import styled from 'styled-components'
import { ScrollDiv } from '../common/Common.Styled'

const Wrapper = styled(ScrollDiv)`
  max-height: 606px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export { Wrapper, List }

import styled from 'styled-components'
import { Body_1 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'
import { Content } from '../Common/Common.Styled'

const FLContent = styled(Content)`
  gap: 8px;
`

const HeaderWrapper = styled.div`
  padding: 4px 0;
`

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

const Name = styled.div<StyledProps>`
  ${Body_1}
  color: ${({ theme }) => theme.colors.gray13};
`

export { FLContent, HeaderWrapper, UserProfileContainer, Name }

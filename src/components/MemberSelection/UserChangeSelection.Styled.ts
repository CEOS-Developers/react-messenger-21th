import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_2 } from '../../styles/Typo.Styled'

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray03};
`

const Description = styled.div<StyledProps>`
  padding-top: 16px;
  padding-bottom: 8px;
  ${Body_2}
  color: ${({ theme }) => theme.colors.gray09};
  text-align: center;
`

const MemberList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;

  height: 660px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Partition = styled.div`
  width: 277px;
  height: 1px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.gray04};

  align-self: flex-end;
`

export { Wrapper, Description, MemberList, ItemContainer, Partition }

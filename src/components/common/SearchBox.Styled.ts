import styled from 'styled-components'
import { Caption } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/StyledProps'

const SearchBoxWrapper = styled.div`
  width: 335px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.gray03};
  border: 1px solid ${({ theme }) => theme.colors.gray13};
  border-radius: 2px;
  display: flex;
`

const SearchBoxContainer = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: 4px;
  padding: 9px 8px;
`

const Input = styled.input<StyledProps>`
  ${Caption}
  background: none;
  border: 0;
  padding: 0.5px 0;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`

export { SearchBoxWrapper, SearchBoxContainer, Input }

import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_1 } from '../../styles/Typo.Styled'

const TextFieldWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 12px;

  max-height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const TextFieldContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray14};
  background-color: ${({ theme }) => theme.colors.gray02};
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 2px;

  width: 286px;
  min-height: 36px;
  max-height: 84px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.div`
  padding: 6px 12px;
  width: 262px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: end;
`

const Input = styled.div<StyledProps>`
  background-color: transparent;
  border: none;
  padding: 0;

  width: 228px;
  min-height: 24px;
  max-height: 72px;
  overflow: auto;

  font-family: 'Pretendard', sans-serif;
  ${Body_1}

  white-space: pre-wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    outline: none;
  }
`

const LeftIcon = styled.div`
  margin: 6px 8.5px 6px 0px;
`

const RightIcon = styled.div`
  margin: 6px 0px 6px 8.5px;
`

export {
  TextFieldWrapper,
  TextFieldContainer,
  InputContainer,
  Input,
  LeftIcon,
  RightIcon,
}

import styled from 'styled-components'
import {
  AddIcon,
  MicrophoneIcon,
  SendIcon,
  FaceIcon,
} from '../../assets/Icons/TextInput'
import { Body_1 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/styledProps'
import { useState } from 'react'

const TextInput = () => {
  const [text, setText] = useState('')
  const handleInputChange = (e) => {
    const { value } = e.target
    setText(value)
  }
  return (
    <InputDiv>
      <LeftIcon>
        <AddIcon />
      </LeftIcon>
      <Input value={text} rows={1} onChange={handleInputChange} $isM={true} />
      <FaceIcon />
      <RightIcon>
        <MicrophoneIcon />
      </RightIcon>
    </InputDiv>
  )
}

const LeftIcon = styled.div`
  margin: 6px 8.5px 6px 0px;
`

const RightIcon = styled.div`
  margin: 6px 0px 6px 8.5px;
`

const Input = styled.textarea<StyledProps>`
  color: ${({ theme }) => theme.colors.gray14};
  background-color: ${({ theme }) => theme.colors.gray02};
  border: 1px solid ${({ theme }) => theme.colors.gray05};
  border-radius: 20px;
  padding: 6px 12px;

  width: 262px;
  min-height: 24px;
  max-height: 72px;

  resize: none;
  font-family: 'Pretendard', sans-serif;
  ${Body_1}

  &::-webkit-scrollbar {
    display: none;
  }
`

const InputDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 12px;

  min-height: 36px;
  max-height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export default TextInput

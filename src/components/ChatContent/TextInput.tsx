import { useEffect, useRef, useState } from 'react'
import {
  AddIcon,
  MicrophoneIcon,
  SendIcon,
  FaceIcon,
} from '../../assets/Icons/TextInput'
import * as s from './TextInput.Styled'

interface TextInputProps {
  onSubmit: (input: string) => void
}

const TextInput = ({ onSubmit }: TextInputProps) => {
  const inputRef = useRef<HTMLDivElement | null>(null)
  const [text, setText] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const handleInput = () => {
    if (inputRef.current) setText(inputRef.current.textContent || '')
  }

  useEffect(() => {
    const isComposing = text === '' ? false : true
    setIsComposing(isComposing)
  }, [text])

  const onClickSendIcon = () => {
    onSubmit(text)
    inputRef.current.textContent = ''
    setText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return
      else {
        e.preventDefault()
        onClickSendIcon()
      }
    }
  }

  return (
    <s.TextFieldWrapper>
      <s.LeftIcon>
        <AddIcon />
      </s.LeftIcon>
      <s.TextFieldContainer>
        <s.InputContainer>
          <s.Input
            ref={inputRef}
            contentEditable="true"
            $isM={true}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
          />
          <FaceIcon width={24} style={{ display: 'flex' }} />
        </s.InputContainer>
      </s.TextFieldContainer>
      <s.RightIcon>
        {isComposing ? (
          <SendIcon onClick={onClickSendIcon} />
        ) : (
          <MicrophoneIcon />
        )}
      </s.RightIcon>
    </s.TextFieldWrapper>
  )
}

export default TextInput

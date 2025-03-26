import { useEffect, useRef, useState } from 'react'
import {
  AddIcon,
  MicrophoneIcon,
  SendIcon,
  FaceIcon,
} from '../../assets/Icons/TextInput'
import * as s from './TextInput.Styled'

const TextInput = () => {
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
          />
          <FaceIcon width={24} style={{ display: 'flex' }} />
        </s.InputContainer>
      </s.TextFieldContainer>
      <s.RightIcon>
        {isComposing ? <SendIcon /> : <MicrophoneIcon />}
      </s.RightIcon>
    </s.TextFieldWrapper>
  )
}

export default TextInput

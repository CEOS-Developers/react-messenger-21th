import { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router'

import {
  AddIcon,
  MicrophoneIcon,
  SendIcon,
  FaceIcon,
} from '../../assets/Icons/TextInput'
import * as s from './TextInput.Styled'

import { useUserStore } from '../../stores/useUserStore'
import { useChatRoomStore } from '../../stores/useChatRoomStore'
import { Chat } from '../../interface/Chat'

const TextInput = () => {
  const { member } = useLocation().state ?? {}
  const roomId = Number(useParams().id)

  const { user, updateLastSeenTime, enterChatRoom } = useUserStore()
  const { chatRoomRef, addChat, createChatRoom } = useChatRoomStore()

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

  const onSubmit = (text: string) => {
    const newChat: Chat = {
      id: Date.now(),
      sender: user.id,
      content: text,
    }

    if (chatRoomRef === roomId) {
      createChatRoom(roomId, member)
      enterChatRoom(roomId)
    }
    addChat(roomId, newChat)
    updateLastSeenTime(roomId)
  }

  const onClickSendIcon = () => {
    if (text === '') return
    onSubmit(text)
    if (inputRef.current) inputRef.current.textContent = ''
    setText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    /* 한글 두 번 입력 방지 */
    if (e.nativeEvent.isComposing) return

    /**
     * shift+enter 또는 ctr+enter는 줄바꿈
     * enter 단독 입력은 제출
     */
    if (e.key === 'Enter') {
      if (e.shiftKey || e.ctrlKey) return
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

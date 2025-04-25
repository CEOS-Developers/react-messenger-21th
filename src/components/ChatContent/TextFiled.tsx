import { useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import {
  AddIcon,
  FaceIcon,
  MicrophoneIcon,
  SendIcon,
} from '@/assets/Icons/TextInput'
import HomeBar from '@/components/Commons/HomeBar'

import { useUserStore } from '@/stores/useUserStore'
import { useChatRoomStore } from '@/stores/useChatRoomStore'
import { usePersistChatRoomStore } from '@/stores/usePersistChatRoomStore'
import { Chat } from '@/interface/Chat'

const TextFiled = () => {
  /* 새로운 채팅방 생성용 */
  const { member } = useLocation().state ?? {}
  const roomId = Number(useParams().id)

  const { user, updateLastSeenTime, enterChatRoom } = useUserStore()
  const { addChat, createChatRoom } = useChatRoomStore()
  const { chatRoomRef } = usePersistChatRoomStore()

  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const onSubmitChat = (text: string) => {
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

  const handleSend = () => {
    if (text.trim() === '') return
    onSubmitChat(text)

    setText('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        handleSend()
      }
    }
  }

  return (
    <div className="border-t-gray03 bg-white">
      <div className="flex min-h-[54px] items-center justify-center px-3 py-2.5">
        <div className="flex flex-1 items-end justify-between gap-2 pt-[1px]">
          <div className="py-1.5">
            <AddIcon />
          </div>
          <div className="bg-gray02 border-gray05 flex flex-1 items-end gap-[10px] rounded px-3 py-[6px]">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={handleChangeInput}
              onInput={handleResizeHeight}
              onKeyDown={handleKeyDown}
              className="font-Body-1-m scrollbar-none scrollbar-none max-h-[72px] flex-1 resize-none overflow-y-auto focus:outline-none"
              rows={1}
            />
            <FaceIcon />
          </div>
          <div className="py-1.5">
            {text.trim() ? (
              <div className="cursor-pointer">
                <SendIcon onClick={handleSend} />
              </div>
            ) : (
              <MicrophoneIcon />
            )}
          </div>
        </div>
      </div>
      <HomeBar />
    </div>
  )
}

export default TextFiled

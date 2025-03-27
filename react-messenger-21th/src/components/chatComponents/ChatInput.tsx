import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { sendMessage } from '../states/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import SendMessageOn from '/public/assets/icons/SendMessageOn.svg?react';
import SendEmoticonNotSelected from '/public/assets/icons/EmoticonNotSelected.svg?react';
import SearchNotSelected from '/public/assets/icons/SearchNotSelected.svg?react';

interface ChatInputProps {
  setIsEmojiOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput: React.FC<ChatInputProps> = ({ setIsEmojiOpen }) => {
  const dispatch = useDispatch();
  // input 값 상태 관리
  const [messageInput, setMessageInput] = useState('');
  // 현재 선택된 채팅방 번호 가져오기
  const currentChatRoomId = useSelector(
    (state: RootState) => state.chat.currentChatRoomId,
  );
  // 메시지 보낸 사람 id 가져오기
  const currentSenderId = useSelector(
    (state: RootState) => state.chat.currentSenderId,
  );
  // 높이 조절용 useRef
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 메시지 보내는 버튼!
  const handleSendMessage = () => {
    if (!messageInput.trim() || !currentChatRoomId) return;

    dispatch(
      sendMessage({
        roomId: currentChatRoomId,
        message: {
          id: uuidv4(),
          senderId: currentSenderId ?? '',
          text: messageInput,
          timestamp: new Date().toISOString(),
        },
      }),
    );

    setMessageInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이 초기화
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value);

    // 자동 높이 조절
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight > 56
          ? 56
          : textareaRef.current.scrollHeight
      }px`;
    }
  };

  // 엔터 눌렀을 때 전송되도록
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isComposing = (e.nativeEvent as KeyboardEvent).isComposing;

    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault(); // 줄바꿈 방지
      handleSendMessage();
    }
  };

  return (
    <ChatInputWrapper>
      <InputWrapper>
        <InputArea
          ref={textareaRef}
          value={messageInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요"
          rows={1}
        />
        <IconWrapper>
          <SendEmoticonNotSelected
            width="16px"
            height="16px"
            onClick={() => setIsEmojiOpen(true)}
          />
          {messageInput.trim() === '' ? (
            <SearchNotSelected width="16px" height="16px" />
          ) : (
            <SendMessageOn
              width="16px"
              height="16px"
              onClick={handleSendMessage}
            />
          )}
        </IconWrapper>
      </InputWrapper>
    </ChatInputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  flex: 1;
`;

const ChatInputWrapper = styled.div`
  width: 279px;
  display: flex;
  padding: 8px 12px;
  align-items: flex-end;
  justify-content: space-between; // 양끝 정렬
  gap: 12px;
  flex: 1 0 0;
  border-radius: 12px;
  border: 1px solid var(--Grey-Grey04, #9ca3af);
  background: var(--Grey-Grey01, #f3f4f6);
`;

const InputArea = styled.textarea`
  resize: none; // 크기 조정 불가능
  flex: 1;
  background-color: transparent;
  color: #374151;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.21px;
  border: none;
  outline: none;
  min-width: 0px;
  max-width: 229px;
  max-
  word-break: break-all;
  overflow-wrap: break-word; // 백업용
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export default ChatInput;

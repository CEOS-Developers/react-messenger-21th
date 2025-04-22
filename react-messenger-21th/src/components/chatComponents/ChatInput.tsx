import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { sendMessage } from '../states/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

import * as s from '../styles/ChatInputStyles';

import SendMessageOn from '/public/assets/icons/SendMessageOn.svg?react';
import SendEmoticonNotSelected from '/public/assets/icons/EmoticonNotSelected.svg?react';
import SearchNotSelected from '/public/assets/icons/SearchNotSelected.svg?react';

const ChatInput: React.FC = () => {
  // roomId 받아오기기
  const { roomId } = useParams();

  const dispatch = useDispatch();
  // input 값 상태 관리
  const [messageInput, setMessageInput] = useState('');

  // 메시지 보낸 사람 id 가져오기
  const currentSenderId = useSelector(
    (state: RootState) => state.chat.currentSenderId,
  );
  // 높이 조절용 useRef
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 메시지 보내는 버튼!
  const handleSendMessage = () => {
    if (!messageInput.trim() || !roomId) return;

    dispatch(
      sendMessage({
        roomId: roomId,
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
        textareaRef.current.scrollHeight > 52
          ? 52
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
    <s.ChatInputWrapper>
      <s.InputWrapper>
        <s.InputArea
          ref={textareaRef}
          value={messageInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요"
          rows={1}
        />
        <s.IconWrapper>
          <SendEmoticonNotSelected width="18px" height="18px" />
          {messageInput.trim() === '' ? (
            <SearchNotSelected width="16px" height="16px" />
          ) : (
            <SendMessageOn
              width="18px"
              height="18px"
              onClick={handleSendMessage}
            />
          )}
        </s.IconWrapper>
      </s.InputWrapper>
    </s.ChatInputWrapper>
  );
};

export default ChatInput;

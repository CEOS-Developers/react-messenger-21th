import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { sendMessage } from '../states/chatSlice';
import { v4 as uuidv4 } from 'uuid';

const ChatInput: React.FC = () => {
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
  };

  return (
    <div>
      <input
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button onClick={handleSendMessage}>전송</button>
    </div>
  );
};

export default ChatInput;

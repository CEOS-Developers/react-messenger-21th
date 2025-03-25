import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { sendMessage } from '../states/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const ChatInput: React.FC = () => {
  const dispatch = useDispatch();
  // input message 관리
  const [messageInput, setMessageInput] = useState('');
  // 현재 유저 정보 받아오기
  const currentUser = useSelector(
    (state: RootState) => state.chat.currentSelectedUser,
  );
  // 현재 파트너 정보 받아오기 (배열 형태)
  const currentChatPartners = useSelector(
    (state: RootState) => state.chat.currentChatPartner,
  );

  const handleSendMessage = () => {
    if (!messageInput.trim()) return; // 빈 메시지는 전송 안 함

    // 현재 모든 챗 파트너에 대해
    currentChatPartners.forEach((partner) => {
      dispatch(
        sendMessage({
          id: uuidv4(),
          senderId: currentUser.id,
          receiverId: partner.id, // 받은 메시지에 해당 메시지 추가
          text: messageInput,
          timestamp: new Date().toISOString(),
        }),
      );
    });

    setMessageInput(''); // 입력창 초기화
  };

  return (
    <>
      <MessageInputField
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <MessageSendButton onClick={handleSendMessage}>전송</MessageSendButton>
    </>
  );
};

const MessageInputField = styled.input``;
const MessageSendButton = styled.button``;

export default ChatInput;

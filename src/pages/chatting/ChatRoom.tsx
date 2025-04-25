import ChatRoomComponent from '@/components/chatting/ChatRoom';
import { useEffect, useState } from 'react';
import ChatRoomData from '@/constants/chatrooms.json';
import { ChatroomList } from '@/types/types';
import { useNavigate, useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { chatroomId } = useParams();
  const [chatroomData, setChatroomData] = useState<ChatroomList | []>([]);
  const navigate = useNavigate();
  useEffect(() => {
    let storedData = localStorage.getItem('chatrooms');
    if (!storedData) {
      localStorage.setItem('chatrooms', JSON.stringify(ChatRoomData)); // 값이 없을 때만 초기 데이터 저장
      storedData = localStorage.getItem('chatrooms');
    }
    const chatroomsData = storedData ? JSON.parse(storedData) : []; // JSON을 객체로 변환
    setChatroomData(chatroomsData);
  }, []);

  useEffect(() => {
    if (chatroomId === undefined) {
      navigate('..');
    }
  }, [chatroomId]);

  return (
    <ChatRoomComponent
      chatroomId={chatroomId}
      chatroomData={chatroomData}
      setChatroomData={setChatroomData}
    />
  );
};

export default ChatRoom;

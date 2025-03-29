import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppBar from '../components/AppBar';
import ChatInput from '../components/Chat/ChatInput';
import ChatMessage from '../components/Chat/SingleChatBubble';

import { users } from '../assets/data';
import { formatChatTime } from '../utils/date';

import BackArrowIcon from '../assets/back_arrow.svg?react';
import MenuIcon from '../assets/menu.svg?react';

interface SingleChatProps {
  senderName: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

const Chat = () => {
  const location = useLocation();
  const { roomId, participant } = location.state || {};

  const [chatList, setChatList] = useState<SingleChatProps[]>([]);
  const [user, setUser] = useState(users[0]);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // 현재 유저 설정 (최초 1회)
  useEffect(() => {
    const savedUser = localStorage.getItem('current-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      localStorage.setItem('current-user', JSON.stringify(user));
    }
  }, []);

  // 상대방 유저 계산
  const opponentId = participant?.find((id: number) => id !== user.userId);
  const opponentUser = users.find((u) => u.userId === opponentId);

  // roomId나 user가 바뀌면 채팅 불러오기 + 스크롤
  useLayoutEffect(() => {
    if (!roomId || !user) return;

    const savedChat = localStorage.getItem(`chat-room-${roomId}`);
    if (savedChat) {
      const chatParsed = JSON.parse(savedChat);
      setChatList(chatParsed);
    }

    setTimeout(() => {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'auto',
      });
    }, 0);
  }, [roomId, user]);

  // 메시지 전송
  const handleSend = (text: string) => {
    const newMessage = {
      senderName: user.name,
      text,
      timestamp: new Date().toISOString(),
      isRead: false,
    };

    const updated = [...chatList, newMessage];
    setChatList(updated);
    localStorage.setItem(`chat-room-${roomId}`, JSON.stringify(updated));

    setTimeout(() => {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  };

  // 타이틀 클릭 시 유저 전환
  const handleSwitchUser = () => {
    const nextUserId = participant.find((id: number) => id !== user.userId);
    const nextUser = users.find((u) => u.userId === nextUserId);
    if (nextUser) {
      localStorage.setItem('current-user', JSON.stringify(nextUser));
      setUser(nextUser);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <AppBar
        type="gradient"
        title={opponentUser?.name || '상대방 없음'}
        subtitle="카페 이름"
        leftIcon={<BackArrowIcon />}
        rightIcon={
          <div className="absolute top-1/2 right-0 flex -translate-x-1 -translate-y-1/2 items-center">
            <MenuIcon />
          </div>
        }
        onTitleClick={handleSwitchUser}
        onLeftClick={() => navigate('/')}
      />

      <section
        ref={chatContainerRef}
        className="flex w-[100vw] flex-1 flex-col gap-[14px] overflow-y-auto pt-15 pb-4"
      >
        {chatList.map((data, i) => (
          <ChatMessage
            key={i}
            isMe={data.senderName === user.name}
            text={data.text}
            timestamp={formatChatTime(data.timestamp)}
            isRead={data.isRead}
            senderName={data.senderName}
          />
        ))}
      </section>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chat;

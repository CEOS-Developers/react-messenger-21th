import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const { roomId } = location.state || {};

  const [chatList, setChatList] = useState<SingleChatProps[]>([]);
  const [user, setUser] = useState(users[0]);

  useEffect(() => {
    //로컬에 저장된 현재 유저 아이디 가져오기
    const savedUser = localStorage.getItem('current-user');

    //로컬에 저장된 채팅 리스트 가져오기
    if (savedUser) {
      const userParsed = JSON.parse(savedUser);
      setUser(userParsed);
    }
  }, []);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  //페이지 진입 시 localStorage 데[이터 불러오기, 스크롤
  // useEffect로 하면 랜더링 되기 전 실행 되서 채팅리스트 끝까진ㄴ
  useLayoutEffect(() => {
    //채팅 불러오기
    const savedChat = localStorage.getItem(`chat-room-${roomId}`);
    if (savedChat) {
      const chatParsed = JSON.parse(savedChat);
      setChatList(chatParsed);
      // 스크롤 이동
      setTimeout(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'auto', // 초기 진입이므로 부드럽게 말고 바로 이동
        });
      }, 0);
    }
  }, []);

  //메세지 전송
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

    // 자동 스크롤
    setTimeout(() => {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  };

  return (
    <div className="flex h-screen flex-col">
      <AppBar
        type="gradient"
        title="이름"
        subtitle="카페 이름"
        leftIcon={<BackArrowIcon />}
        rightIcon={
          <div
            className={`absolute top-1/2 right-0 flex shrink-0 -translate-x-1 -translate-y-1/2 items-center justify-between`}
          >
            <MenuIcon />
          </div>
        }
      />
      <section
        ref={chatContainerRef}
        className="flex w-[100vw] flex-1 flex-col gap-[14px] overflow-y-auto pt-15 pb-4"
      >
        {chatList?.map((data, i) => {
          return (
            <ChatMessage
              key={i}
              isMe={data.senderName === user.name}
              text={data.text}
              timestamp={formatChatTime(data.timestamp)}
              isRead={false}
              senderName={data.senderName || '알 수 없음'}
            />
          );
        })}
      </section>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chat;

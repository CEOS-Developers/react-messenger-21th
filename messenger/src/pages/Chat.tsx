import AppBar from '../components/AppBar';
import ChatInput from '../components/Chat/ChatInput';
import ChatMessage from '../components/Chat/SingleChatBubble';

import { chatMock } from '../assets/data';

import { formatChatTime } from '../utils/date';

import BackArrowIcon from '../assets/back_arrow.svg?react';
import MenuIcon from '../assets/menu.svg?react';
const Chat = () => {
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
      <section className="flex w-[100vw] flex-1 flex-col gap-[14px] overflow-y-auto pt-15 pb-4">
        {chatMock.chat.map((data, i) => {
          const sender = chatMock.opponents.find(
            (chat) => chat.userId === data.senderId,
          );
          return (
            <ChatMessage
              key={i}
              isMe={data.isMe}
              text={data.text}
              timestamp={formatChatTime(data.timestamp)}
              isRead={false}
              senderName={sender?.name || '알 수 없음'}
              profileImageUrl={''}
            />
          );
        })}
      </section>

      <ChatInput />
    </div>
  );
};

export default Chat;

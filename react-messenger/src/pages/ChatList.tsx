import ChatUser from '@/components/chatlist/ChatUser';
import NavBar from '@/components/common/NavBar';
import rawMessages from '@/data/messages.json';
import { formatTime } from '@/utils/formatDate';
import { connectJson } from '@/utils/connectJson';
import { useNavigate } from 'react-router-dom';
import { Message } from '@/type/message';
import StatusBar from '@/components/statusbar/StatusBar';

const ChatList = () => {
  const navigate = useNavigate();
  const messages = rawMessages as Message[];

  return (
    <div className="w-full h-full flex flex-col bg-grey-50">
      <div className="sticky top-0 z-10 bg-grey-50">
        <StatusBar />
        <span className="head-1 text-grey-900 p-4 block">채팅방</span>
      </div>
      <div className="flex flex-col overflow-y-auto pb-[30px]">
        {messages.map((msg) => {
          const lastMsg = msg.messages.at(-1);
          const chat = connectJson(msg) as {
            name: string;
            profileImg: string;
            memberCount?: number;
          };

          return (
            <ChatUser
              key={`${msg.id}-${msg.type}`}
              username={chat.name}
              profileImg={chat.profileImg}
              lastMessage={lastMsg?.content ?? ''}
              time={lastMsg?.time ? formatTime(lastMsg.time) : ''}
              unread={msg.unreadCount}
              memberCount={chat.memberCount}
              onClick={() =>
                navigate('/chatroom', {
                  state: {
                    name: chat.name,
                    profileImg: chat.profileImg,
                    type: msg.type,
                    id: msg.id,
                  },
                })
              }
            />
          );
        })}
      </div>
      <NavBar />
    </div>
  );
};

export default ChatList;

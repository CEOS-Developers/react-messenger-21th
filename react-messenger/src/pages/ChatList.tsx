import ChatUser from '@/components/chatlist/ChatUser';
import BottomMenu from '@/components/home/BottomMenu';
import rawMessages from '@/data/messages.json';
import { formatTime } from '@/utils/formatDate';
import { connectJson } from '@/utils/connectJson';
import { useNavigate } from 'react-router-dom';
import { Message } from '@/type/message';

const ChatList = () => {
  const navigate = useNavigate();
  const messages = rawMessages as Message[];

  return (
    <div className="w-full flex flex-col bg-grey-50 pb-[100px]">
      <span className="text-head1 font-semibold text-grey-900 p-4">채팅방</span>
      <div className="flex flex-col">
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
      <BottomMenu />
    </div>
  );
};

export default ChatList;

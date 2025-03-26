import ChatUser from '@/components/chatlist/ChatUser';
import BottomMenu from '@/components/home/BottomMenu';
import rawMessages from '@/data/messages.json';
import { connectJson } from '@/utils/connectJSON';

type Message = {
  id: number;
  type: 'user' | 'group';
  lastMessage: string;
  time: string;
  unreadCount?: number;
  memberCount?: number;
};

const messages: Message[] = rawMessages.map((msg) => ({
  ...msg,
  type: msg.type === 'user' ? 'user' : 'group', // 타입 좁히기
}));

const ChatList = () => {
  return (
    <div className="w-full flex flex-col bg-grey-50 pb-[100px]">
      <span className="text-head1 font-semibold text-grey-900 p-4">채팅방</span>
      <div className="flex flex-col">
        {messages.map((msg) => {
          const chat = connectJson(msg) as Message & {
            name: string;
            profileImg: string;
          };

          return (
            <ChatUser
              key={`${msg.id}`}
              username={chat.name}
              profileImg={chat.profileImg}
              lastMessage={chat.lastMessage}
              time={chat.time}
              unread={chat.unreadCount}
              memberCount={chat.memberCount}
            />
          );
        })}
      </div>
      <BottomMenu />
    </div>
  );
};
export default ChatList;

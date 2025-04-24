import ChatUser from '@/components/chatlist/ChatUser';
import NavBar from '@/components/common/NavBar';
import rawMessages from '@/data/messages.json';
import { formatTime } from '@/utils/formatDate';
import { connectJson } from '@/utils/connectJson';
import { useNavigate } from 'react-router-dom';
import { Message } from '@/type/message';
import { useStatusBar } from '@/hooks/useStatusBar';
import clsx from 'clsx';

const ChatList = () => {
  const navigate = useNavigate();
  const messages = rawMessages as Message[];
  const { offsetClass, hideStatusBar } = useStatusBar();

  return (
    <div className="w-full h-full flex flex-col bg-grey-50">
      <div className={`w-[375px] h-[62px] ${offsetClass} z-10 bg-grey-50`}>
        <span className="w-full head-1 text-grey-900 p-4 block">채팅방</span>
      </div>
      <div
        className={clsx('flex flex-col overflow-y-auto h-full b-[30px]', hideStatusBar ? 'pt-[62px]' : 'max-h-[620px]')}
      >
        {messages.map((msg) => {
          const lastMsg = msg.messages.at(-1);
          const chat = connectJson(msg) as {
            name: string;
            profileImg: string;
            memberCount?: number;
          };

          const chatUserProps = {
            username: chat.name,
            profileImg: chat.profileImg,
            lastMessage: lastMsg?.content ?? '',
            time: lastMsg?.createdAt ? formatTime(lastMsg.createdAt) : '',
            unread: msg.unreadCount ?? 0,
            memberCount: chat.memberCount,
            onClick: () =>
              navigate('/chatroom', {
                state: {
                  name: chat.name,
                  profileImg: chat.profileImg,
                  type: msg.chatType,
                  id: msg.chatId,
                },
              }),
          };

          return <ChatUser key={`${msg.chatId}-${msg.chatType}`} {...chatUserProps} />;
        })}
      </div>
      <NavBar />
    </div>
  );
};

export default ChatList;

import ChatUser from '@/components/chatlist/ChatUser';
import NavBar from '@/components/common/NavBar';
import { useNavigate } from 'react-router-dom';
import { useStatusBar } from '@/hooks/useStatusBar';
import { useChatStore } from '@/store/chatStore';
import { connectJson } from '@/utils/connectJson';
import { formatTime } from '@/utils/formatDate';
import clsx from 'clsx';
import { Message } from '@/type/message';

const ChatList = () => {
  const navigate = useNavigate();
  const { offsetClass, hideStatusBar } = useStatusBar();
  const { conversationMap, conversationMeta } = useChatStore();

  const seenTargetUserIds = new Set<number>();

  // 채팅방 정보 구성 함수
  const buildChatRoom = (): Message[] => {
    return Object.entries(conversationMap)
      .map(([chatId, messages]) => {
        const meta = conversationMeta[chatId];
        return {
          chatId: Number(chatId),
          messages,
          targetUserId: meta?.targetUserId ?? messages[0]?.senderId ?? 0,
          chatType: meta?.chatType ?? 'user',
          unreadCount: meta?.unreadCount ?? 0,
        };
      })
      .filter((room) => {
        if (room.chatType !== 'user') return true;
        if (seenTargetUserIds.has(room.targetUserId)) return false;
        seenTargetUserIds.add(room.targetUserId);
        return true;
      })
      .sort((a, b) => {
        const aTime = new Date(a.messages.at(-1)?.createdAt ?? 0).getTime();
        const bTime = new Date(b.messages.at(-1)?.createdAt ?? 0).getTime();
        return bTime - aTime;
      });
  };

  const getLastMessageContent = (msg?: Message['messages'][0]) => {
    if (!msg) return '';
    return msg.messageType === 'image' ? '사진을 보냈습니다.' : (msg.content ?? '');
  };

  const chatRooms = buildChatRoom();

  return (
    <div className="w-full h-full flex flex-col bg-grey-50">
      <div className={`w-[375px] h-[62px] ${offsetClass} z-10 bg-grey-50`}>
        <span className="w-full head-1 text-grey-900 p-4 block">채팅방</span>
      </div>

      <div
        className={clsx('flex flex-col overflow-y-auto h-full b-[30px]', hideStatusBar ? 'pt-[62px]' : 'max-h-[620px]')}
      >
        {chatRooms.map((room) => {
          const lastMsg = room.messages.at(-1);
          const chatMeta = connectJson(room);

          return (
            <ChatUser
              key={room.chatId}
              username={chatMeta.name}
              profileImg={chatMeta.profileImg}
              lastMessage={getLastMessageContent(lastMsg)}
              createdAt={lastMsg?.createdAt ? formatTime(lastMsg.createdAt) : ''}
              unreadCount={room.unreadCount}
              memberCount={chatMeta.memberCount}
              onClick={() =>
                navigate(`/chat/${room.chatId}`, {
                  state: {
                    name: chatMeta.name,
                    profileImg: chatMeta.profileImg,
                    chatType: chatMeta.memberCount ? 'group' : 'user',
                    targetUserId: chatMeta.targetUserId,
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

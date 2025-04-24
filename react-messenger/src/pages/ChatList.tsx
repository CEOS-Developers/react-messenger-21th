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

  const chatRooms: Message[] = Object.entries(conversationMap)
    .map(([chatId, messages]) => {
      const meta = conversationMeta[chatId];

      const message: Message = {
        chatId: Number(chatId),
        messages,
        targetUserId: meta?.targetUserId ?? messages[0]?.senderId ?? 0,
        chatType: meta?.chatType ?? 'user',
        unreadCount: meta?.unreadCount ?? 0,
      };

      return message;
    })
    .filter((msg) => {
      if (msg.chatType !== 'user') return true;
      if (seenTargetUserIds.has(msg.targetUserId)) return false;
      seenTargetUserIds.add(msg.targetUserId);
      return true;
    })
    .sort(
      (a, b) =>
        new Date(b.messages.at(-1)?.createdAt ?? 0).getTime() - new Date(a.messages.at(-1)?.createdAt ?? 0).getTime(),
    );

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
          const lastMsgContent =
            lastMsg?.messageType === 'image' ? '이미지를 전송하였습니다.' : (lastMsg?.content ?? '');

          const chatUserProps = {
            username: chatMeta.name,
            profileImg: chatMeta.profileImg,
            lastMessage: lastMsgContent,
            createdAt: lastMsg?.createdAt ? formatTime(lastMsg.createdAt) : '',
            unreadCount: room.unreadCount,
            memberCount: chatMeta.memberCount,
            onClick: () =>
              navigate(`/chat/${room.chatId}`, {
                state: {
                  name: chatMeta.name,
                  profileImg: chatMeta.profileImg,
                  chatType: chatMeta.memberCount ? 'group' : 'user',
                  targetUserId: chatMeta.targetUserId,
                },
              }),
          };

          return <ChatUser key={room.chatId} {...chatUserProps} />;
        })}
      </div>
      <NavBar />
    </div>
  );
};

export default ChatList;

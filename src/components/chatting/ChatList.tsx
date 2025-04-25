import Arrow from '@/assets/images/icon/Arrow.svg?react';
import TeamChat from '@/assets/images/profile/TeamChat.svg?react';
import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';
import { ChatRoom, ChatroomList } from '@/types/types';
import { utcToKst12 } from '@/utils/formatDate';
import USERS from '@/constants/users.json';
import ChattingAlert from '@/components/chatting/ChattingAlert';
import { useNavigate } from 'react-router-dom';

interface ChatListProps {
  group: string;
  chatRoomData: ChatroomList;
}

const ChatList: React.FC<ChatListProps> = ({ group, chatRoomData }) => {
  const [isListOpen, setIsListOpen] = useState(true);
  const navigate = useNavigate();

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  const handleChatRoomClick = (id: number) => {
    navigate(id.toString());
  };

  const getLastChatMessageText = (chatRoom: ChatRoom) => {
    const lastChat = chatRoom.chats?.at(-1);
    const lastMessage = lastChat?.chatMessages?.at(-1);
    if (lastMessage?.type === 'image') {
      return '사진을 보냈습니다.';
    }
    return lastMessage ? lastMessage.content : '';
  };

  const getLastChatMessageTime = (chatRoom: ChatRoom) => {
    const lastChat = chatRoom.chats?.at(-1);
    const lastMessage = lastChat?.chatMessages.at(-1);
    return lastMessage?.timestamp ? utcToKst12(lastMessage.timestamp) : '';
  };

  return (
    <section className='flex flex-col px-4 py-2 gap-4'>
      {/* 채팅방 종류, 토글 버튼 */}
      <span className='flex justify-between'>
        <span className='font-cap-med text-neutral-500'>{group}</span>
        <Arrow
          className={cn('w-4 h-4 text-neutral-500 cursor-pointer rotate-90', {
            'rotate-270': isListOpen,
          })}
          onClick={handleClickList}
        />
      </span>
      {/* 채팅방 목록 */}
      {isListOpen && (
        <ul className='flex flex-col gap-3 font-body-2-med text-neutral-700'>
          {chatRoomData.map((chatRoom: ChatRoom) => (
            <li
              key={chatRoom.chatroomId}
              className='flex gap-3 text-center items-center cursor-pointer'
              onClick={() => handleChatRoomClick(chatRoom.chatroomId)}
            >
              {chatRoom.userId.length > 1 ? (
                <TeamChat />
              ) : USERS[chatRoom.userId[0]].img ? (
                <img
                  src={USERS[chatRoom.userId[0]].img ?? undefined}
                  alt=''
                  className='w-[50px] h-[50px] rounded-[4px]'
                />
              ) : (
                <Profile />
              )}
              <span className='flex-1 flex flex-col gap-1 text-start overflow-x-hidden'>
                <div className='font-body-2-sb text-neutral-800'>
                  {chatRoom.title}
                </div>
                <div className='font-body-2-med text-neutral-500 truncate'>
                  {getLastChatMessageText(chatRoom)}
                </div>
              </span>
              <span className='flex flex-col items-end gap-2'>
                <span className='font-cap-med text-neutral-300'>
                  {getLastChatMessageTime(chatRoom)}
                </span>
                {chatRoom.unread && <ChattingAlert count={chatRoom.unread} />}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ChatList;

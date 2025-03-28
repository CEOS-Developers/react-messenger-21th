import Arrow from '@/assets/images/icon/Arrow.svg?react';
import TeamChat from '@/assets/images/profile/TeamChat.svg?react';
import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ChatRoom, ChatroomList } from '@/types/types';
import { utcToKst12 } from '@/utils/formatDate';

interface ChatListProps {
  group: string;
  chatRoomData: ChatroomList;
  setChatroomId: Dispatch<SetStateAction<number | null>>;
}

const ChatList: React.FC<ChatListProps> = ({
  group,
  chatRoomData,
  setChatroomId,
}) => {
  const [isListOpen, setIsListOpen] = useState(true);

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  const handleChatRoomClick = (id: number) => {
    setChatroomId(id);
  };

  const getLastChatMessageText = (chatRoom: ChatRoom) => {
    const lastChat = chatRoom.chats?.[chatRoom.chats.length - 1];
    const lastMessage =
      lastChat?.chatMessages[lastChat.chatMessages.length - 1];
    return lastMessage ? lastMessage.text : '';
  };

  const getLastChatMessageTime = (chatRoom: ChatRoom) => {
    const lastChat = chatRoom.chats?.[chatRoom.chats.length - 1];
    const lastMessage =
      lastChat?.chatMessages[lastChat.chatMessages.length - 1];
    return lastMessage ? utcToKst12(lastMessage.timestamp) : '';
  };

  return (
    <section className='flex flex-col px-4 py-2 gap-4'>
      <span className='flex justify-between'>
        <span className='font-cap-med text-neutral-500'>{group}</span>
        <Arrow
          className={cn('w-4 h-4 text-neutral-500 cursor-pointer rotate-90', {
            'rotate-270': isListOpen,
          })}
          onClick={handleClickList}
        />
      </span>
      {isListOpen && (
        <ul className='flex flex-col gap-3 font-body-2-med text-neutral-700'>
          {chatRoomData.map((chatRoom: ChatRoom) => (
            <li
              key={chatRoom.chatroomId}
              className='flex gap-3 text-center items-center cursor-pointer'
              onClick={() => handleChatRoomClick(chatRoom.chatroomId)}
            >
              {chatRoom.userId.length > 1 ? <TeamChat /> : <Profile />}
              <span className='flex-1 flex flex-col gap-1 text-start overflow-x-hidden'>
                <div className='font-body-2-sb text-neutral-800'>
                  {chatRoom.title}
                </div>
                <div className='font-body-2-med text-neutral-500 truncate'>
                  {getLastChatMessageText(chatRoom)}
                </div>
              </span>
              <span className='font-cap-med text-neutral-300'>
                {getLastChatMessageTime(chatRoom)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ChatList;

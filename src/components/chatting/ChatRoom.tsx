import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import cn from '@/utils/cn';
import { Dispatch, SetStateAction } from 'react';
import ChatHeader from '../layout/header/ChatHeader';
import ChatInput from './ChatInput';

interface ChatRoomProps {
  setChatroomId: Dispatch<SetStateAction<number | null>>;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ setChatroomId }) => {
  return (
    <main className='flex flex-1 bg-neutral-0'>
      <ChatHeader setChatroomId={setChatroomId} />
      <ChatInput />
    </main>
  );
};

export default ChatRoom;

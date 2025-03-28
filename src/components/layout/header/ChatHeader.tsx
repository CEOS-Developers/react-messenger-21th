import Arrow from '@/assets/images/icon/Arrow.svg?react';
import Search from '@/assets/images/icon/Search.svg?react';
import HamburgerBar from '@/assets/images/icon/HamburgerBar.svg?react';
import { Dispatch, SetStateAction } from 'react';

interface ChatHeader {
  setChatroomId: Dispatch<SetStateAction<number | null>>;
  title: string;
}

const ChatHeader: React.FC<ChatHeader> = ({ setChatroomId, title }) => {
  return (
    <header className='flex sticky top-0 w-full h-fit px-4 py-3 justify-center bg-blue-0'>
      <Arrow
        className='absolute left-4 w-6 h-6 text-neutral-600 rotate-180 cursor-pointer'
        onClick={() => setChatroomId(null)}
      />
      <span className='font-headline-2 text-neutral-800 items-center'>
        {title}
      </span>
      <span className='flex absolute right-4 gap-2'>
        <Search className='w-6 h-6 text-neutral-600 cursor-pointer' />
        <HamburgerBar className='w-6 h-6 text-neutral-600 cursor-pointer' />
      </span>
    </header>
  );
};

export default ChatHeader;

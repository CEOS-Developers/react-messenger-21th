import Search from '@/assets/images/icon/Search.svg?react';
import Plus from '@/assets/images/icon/Plus.svg?react';
import Menu from '@/assets/images/icon/VerticalEllipsis.svg?react';

const ChatListHeader = () => {
  return (
    <header className='flex absolute w-full h-fit justify-between px-4 py-3 bg-white'>
      <span className='font-headline-2'>채팅 목록</span>
      <span className='flex gap-3 items-center'>
        <Search className='w-6 h-6 text-neutral-600 cursor-pointer' />
        <Plus className='w-6 h-6 text-neutral-600 cursor-pointer' />
        <Menu className='w-6 h-6 text-neutral-600 cursor-pointer' />
      </span>
    </header>
  );
};

export default ChatListHeader;

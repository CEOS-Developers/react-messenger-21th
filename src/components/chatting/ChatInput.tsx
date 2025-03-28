import Plus from '@/assets/images/icon/Plus.svg?react';
import Send from '@/assets/images/icon/Send.svg?react';
import Smile from '@/assets/images/icon/Smile.svg?react';

const ChatInput = () => {
  return (
    <section className='flex absolute bottom-0 bg-white w-full px-4 py-3 gap-2 items-center'>
      <Plus className='w-6 h-6 items-center text-neutral-700 cursor-pointer' />
      <span className='flex flex-1 relative'>
        <input className='flex flex-1 border border-neutral-200 rounded-[50px] pl-3 pr-12 py-2' />
        <Smile className='w-6 h-6 text-neutral-300 absolute top-2 right-3 cursor-pointer' />
      </span>
      <Send
        className='w-6 h-6 items-center text-neutral-600 cursor-pointer'
        tabIndex={0}
      />
    </section>
  );
};

export default ChatInput;

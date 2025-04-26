import { ChatMessages } from '@/types/types';
import { utcToKst24 } from '@/utils/formatDate';
import File from '@/assets/images/icon/File.svg?react';

const SentMessage = ({ message }: { message: ChatMessages }) => {
  return (
    <div className='flex items-end justify-end pr-4 py-3 pl-16 gap-2'>
      <div className='flex items-end gap-1'>
        <div className='font-cap-med text-neutral-300'>
          {message.timestamp && utcToKst24(message.timestamp)}
        </div>
        {message.type === 'text' && typeof message.content === 'string' && (
          <div className='bg-white border border-neutral-100 rounded-[.25rem] px-3 py-2 flex justify-center items-center font-body-2-med text-neutral-700 whitespace-break-spaces break-all'>
            {message.content}
          </div>
        )}
        {message.type === 'image' && typeof message.content === 'string' && (
          <img
            className='border border-neutral-100 rounded-[.25rem] flex w-60 h-60 object-cover'
            src={message.content}
          />
        )}
        {message.type === 'file' && typeof message.content === 'string' && (
          <a
            href={message.content}
            download={message.contentName}
            className='bg-blue-50 border border-neutral-100 rounded-[.25rem] px-3 py-2 flex justify-center items-center font-body-2-med text-neutral-700 whitespace-break-spaces break-all cursor-pointer gap-2'
          >
            {message.contentName}
            <File className='w-10 h-10 shrink-0 border-2 border-neutral-200 rounded-full p-1' />
          </a>
        )}
      </div>
    </div>
  );
};

export default SentMessage;

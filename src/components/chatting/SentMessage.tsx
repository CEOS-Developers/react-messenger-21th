import { ChatMessages } from '@/types/types';
import { utcToKst24 } from '@/utils/formatDate';

const SentMessage = ({ message }: { message: ChatMessages }) => {
  return (
    <div className='flex items-end justify-end pr-4 py-3 pl-16 gap-2'>
      <div className='flex items-end gap-1'>
        <div className='font-cap-med text-neutral-300'>
          {utcToKst24(message.timestamp)}
        </div>
        <div className='bg-white border border-neutral-100 rounded-[4px] px-3 py-2 flex justify-center items-center font-body-2-med text-neutral-700 whitespace-break-spaces'>
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default SentMessage;

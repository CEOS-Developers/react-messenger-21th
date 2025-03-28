import { ChatMessages } from '@/types/types';
import UserList from '@/constants/users.json';
import ProfileImg from '@/assets/images/profile/ProfileMedium.svg?react';

const RecievedMessage = ({ message }: { message: ChatMessages }) => {
  return (
    <div className='flex pl-4 py-3 pr-16 gap-2'>
      {UserList[message.senderId].img ? (
        <img src={UserList[message.senderId].img} alt='' className='w-9 h-9' />
      ) : (
        <ProfileImg className='shrink-0' />
      )}
      <div className='flex flex-col gap-[2px]'>
        <div className='font-cap-med text-neutral-500'>
          {UserList[message.senderId].name}
        </div>
        <div className='flex items-end gap-1'>
          <div className='bg-white border border-neutral-100 rounded-[4px] px-3 py-2 flex justify-center items-center font-body-2-med text-neutral-700 whitespace-break-spaces'>
            {message.text}
          </div>
          <div className='font-cap-med text-neutral-300'>
            {message.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecievedMessage;

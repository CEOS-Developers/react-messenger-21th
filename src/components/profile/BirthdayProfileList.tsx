import Arrow from '@/assets/images/icon/Arrow.svg?react';
import Profile from '@/assets/images/profile/ProfileSmall.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';

const BirthdayProfileList = () => {
  const [isListOpen, setIsListOpen] = useState(true);

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  return (
    <section className='flex flex-col p-4 bg-blue-0 gap-4'>
      <span className='flex justify-between'>
        <span className='flex gap-1 items-center'>
          <span className='font-cap-med text-neutral-500'>생일인 프로필</span>
          <span className='font-cap-med text-neutral-300'>3</span>
        </span>
        <Arrow
          className={cn('w-4 h-4 text-neutral-500 cursor-pointer rotate-90', {
            'rotate-270': isListOpen,
          })}
          onClick={handleClickList}
        />
      </span>
      {isListOpen && (
        <span className='flex gap-3'>
          <span className='flex flex-col gap-1 text-center items-center cursor-pointer'>
            <Profile />
            <span className='font-cap-med text-neutral-700'>신수진</span>
          </span>
          <span className='flex flex-col gap-1 text-center items-center cursor-pointer'>
            <Profile />
            <span className='font-cap-med text-neutral-700'>한서정</span>
          </span>
          <span className='flex flex-col gap-1 text-center items-center cursor-pointer'>
            <Profile />
            <span className='font-cap-med text-neutral-700'>김서연</span>
          </span>
        </span>
      )}
    </section>
  );
};

export default BirthdayProfileList;

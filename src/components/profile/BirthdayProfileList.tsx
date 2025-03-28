import Arrow from '@/assets/images/icon/Arrow.svg?react';
import ProfileImg from '@/assets/images/profile/ProfileSmall.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';
import { Profile } from '@/types/types';

const BirthdayProfileList = ({ profiles }: { profiles: Profile[] }) => {
  const [isListOpen, setIsListOpen] = useState(true);

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  return (
    <section className='flex flex-col p-4 bg-blue-0 gap-4'>
      <span className='flex justify-between'>
        <span className='flex gap-1 items-center'>
          <span className='font-cap-med text-neutral-500'>생일인 프로필</span>
          <span className='font-cap-med text-neutral-300'>
            {profiles.length}
          </span>
        </span>
        <Arrow
          className={cn('w-4 h-4 text-neutral-500 cursor-pointer rotate-90', {
            'rotate-270': isListOpen,
          })}
          onClick={handleClickList}
        />
      </span>
      {isListOpen && (
        <ul className='flex gap-3'>
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className='flex flex-col gap-1 text-center items-center cursor-pointer w-7 overflow-x-hidden'
            >
              {profile.img ? (
                <img
                  src={profile.img}
                  alt=''
                  className='w-7 h-7 rounded-[.125rem]'
                />
              ) : (
                <ProfileImg />
              )}
              <span className='flex font-cap-med text-neutral-700 truncate text-start'>
                {profile.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BirthdayProfileList;

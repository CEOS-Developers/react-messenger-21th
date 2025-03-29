import Arrow from '@/assets/images/icon/Arrow.svg?react';
import ProfileImg from '@/assets/images/profile/ProfileMedium.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';
import { Profile } from '@/types/types';

const ProfileList = ({
  group,
  profiles,
}: {
  group: string;
  profiles: Profile[];
}) => {
  const [isListOpen, setIsListOpen] = useState(true);

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  return (
    <section className='flex flex-col p-4 gap-4'>
      <span className='flex justify-between'>
        <span className='flex gap-1 items-center'>
          <span className='font-cap-med text-neutral-500'>{group}</span>
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
        <span className='flex flex-col gap-3 font-body-2-med text-neutral-700'>
          {profiles.map((profile) => (
            <span
              key={profile.id}
              className='flex gap-3 text-center items-center cursor-pointer'
            >
              {profile.img ? (
                <img
                  src={profile.img}
                  alt=''
                  className='w-9 h-9 rounded-[4px]'
                />
              ) : (
                <ProfileImg />
              )}
              <span>{profile.name}</span>
            </span>
          ))}
        </span>
      )}
    </section>
  );
};

export default ProfileList;

import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import ProfileExtraSmall from '@/assets/images/profile/ProfileExtraSmall.svg?react';
import Arrow from '@/assets/images/icon/Arrow.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import ME from '@/constants/users.json';

const MyProfileList = () => {
  const navigate = useNavigate();

  return (
    <section className='flex px-4 py-3 justify-between align-middle self-stretch'>
      <span className='flex items-center gap-4'>
        {ME[0].img ? (
          <img
            src={ME[0].img}
            alt=''
            className='w-[50px] h-[50px] rounded-[.25rem] cursor-pointer'
            onClick={() => navigate(PATH.HOME.myProfile)}
          />
        ) : (
          <Profile
            className='cursor-pointer'
            onClick={() => navigate(PATH.HOME.myProfile)}
          />
        )}
        <span className='font-body-1-sb'>{ME[0].name}</span>
      </span>
      <span className='flex items-center gap-1 cursor-pointer'>
        <ProfileExtraSmall />
        <Arrow className='text-gray-400 w-4 h-4' />
      </span>
    </section>
  );
};

export default MyProfileList;

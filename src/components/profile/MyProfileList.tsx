import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import ProfileExtraSmall from '@/assets/images/profile/ProfileExtraSmall.svg?react';
import Arrow from '@/assets/images/icon/Arrow.svg?react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const MyProfileList = () => {
  const navigate = useNavigate();

  return (
    <section className='flex px-4 py-3 justify-between align-middle self-stretch'>
      <span className='flex items-center gap-4'>
        <Profile
          className='cursor-pointer'
          onClick={() => navigate(PATH.HOME.myProfile)}
        />
        <span className='font-body-1-sb'>최서연</span>
      </span>
      <span className='flex items-center gap-1 cursor-pointer'>
        <ProfileExtraSmall />
        <Arrow className='text-gray-400 w-4 h-4' />
      </span>
    </section>
  );
};

export default MyProfileList;

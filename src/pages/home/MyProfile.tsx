import Profile from '@/assets/images/profile/ProfileExtraBig.svg?react';
import Arrow from '@/assets/images/icon/BigArrow.svg?react';
import Market from '@/assets/images/navbar/Market.svg?react';
import Scan from '@/assets/images/icon/Scan.svg?react';
import Settings from '@/assets/images/icon/Settings.svg?react';
import ChatAlone from '@/assets/images/icon/ChatAlone.svg?react';
import Edit from '@/assets/images/icon/Edit.svg?react';
import Sns from '@/assets/images/icon/Sns.svg?react';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <section className='bg-myprofile justify-between'>
      <header className='flex px-4 py-3 justify-between'>
        <Arrow
          className='flex w-6 h-6 text-neutral-0 rotate-180 cursor-pointer'
          onClick={() => navigate(-1)}
        />
        <span className='flex gap-3 items-center text-neutral-0'>
          <Market className='w-6 h-6 cursor-pointer' />
          <Scan className='w-6 h-6 cursor-pointer' />
          <Settings className='w-6 h-6' cursor-pointer />
        </span>
      </header>
      <section className='flex flex-col gap-9 items-center'>
        <button className='flex w-[300px] h-fit py-[10px] px-3 justify-between align-middle items-center cursor-pointer rounded-[10px] border border-[#4E70DD]  bg-[rgba(153,176,251,0.40)] shadow-[0px_0px_12px_0px_rgba(255,255,255,0.25)]'>
          <div className='flex gap-4'>
            <Profile className='w-18 h-18' />
            <span className='flex flex-col text-start justify-center text-blue-0 gap-1'>
              <span className='font-headline-3'>최서연</span>
              <span className='font-body-2-med'>2002.02.07</span>
            </span>
          </div>
          <Arrow className='w-6 h-6 text-neutral-0' />
        </button>
        <nav className='flex text-blue-200 gap-11 py-10 px-4 items-center self-stretch rounded-t-[16px] bg-[rgba(153,176,251,0.40)] bg-opacity-40 justify-center'>
          <button className='flex flex-col gap-2 items-center cursor-pointer'>
            <ChatAlone className='w-8 items-center' />
            <span className='font-cap-sb'>나와의 채팅</span>
          </button>
          <button className='flex flex-col gap-2 items-center cursor-pointer'>
            <Edit className='w-8 items-center' />
            <span className='font-cap-sb'>프로필 편집</span>
          </button>
          <button className='flex flex-col gap-2 items-center cursor-pointer'>
            <Sns className='w-8 items-center' />
            <span className='font-cap-sb'>멀티 프로필</span>
          </button>
        </nav>
      </section>
    </section>
  );
};

export default MyProfile;

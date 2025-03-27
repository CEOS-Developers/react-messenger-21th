import MainHeader from '@/components/layout/header/MainHeader';
import MyProfileList from '@/components/profile/MyProfileList';
import BirthdayProfileList from '@/components/profile/BirthdayProfileList';
import ProfileList from '@/components/profile/ProfileList';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MyProfileList />
      <BirthdayProfileList />
      <ProfileList group='비즈니스' />
      <hr className='border-[#E8ECFB] mx-4 my-2' />
      <ProfileList group='친구' />
    </>
  );
};

export default Home;

import MainHeader from '@/components/layout/header/MainHeader';
import MyProfileList from '@/components/profile/MyProfileList';
import BirthdayProfileList from '@/components/profile/BirthdayProfileList';
import ProfileList from '@/components/profile/ProfileList';
import { PROFILES, BUSINESS_PROFILES } from '@/constants/profiles';
import { getTodayBirthdays } from '@/utils/getTodayBirthdays';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MyProfileList />
      <BirthdayProfileList
        profiles={getTodayBirthdays(PROFILES, BUSINESS_PROFILES)}
      />
      <ProfileList group='비즈니스' profiles={BUSINESS_PROFILES} />
      <hr className='border-[#E8ECFB] mx-4 my-2' />
      <ProfileList group='친구' profiles={PROFILES} />
    </>
  );
};

export default Home;

import MainHeader from '@/components/layout/header/MainHeader';
import MyProfileList from '@/components/profile/MyProfileList';
import BirthdayProfileList from '@/components/profile/BirthdayProfileList';
import ProfileList from '@/components/profile/ProfileList';
import PROFILES from '@/constants/users.json';
import { getTodayBirthdays } from '@/utils/getTodayBirthdays';
import { Profile } from '@/types/types';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MyProfileList />
      <BirthdayProfileList
        profiles={getTodayBirthdays(PROFILES as Profile[])}
      />
      <ProfileList
        group='비즈니스'
        profiles={
          PROFILES.filter((profile) => profile.type === 'business') as Profile[]
        }
      />
      <hr className='border-[#E8ECFB] mx-4 my-2' />
      <ProfileList
        group='친구'
        profiles={
          PROFILES.filter((profile) => profile.type === 'friend') as Profile[]
        }
      />
    </>
  );
};

export default Home;

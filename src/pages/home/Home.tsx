import MainHeader from '@/components/layout/header/MainHeader';
import MyProfileList from '@/components/profile/MyProfileList';
import ProfileList from '@/components/profile/ProfileList';

const Home = () => {
  return (
    <>
      <MainHeader />
      <MyProfileList />
      <ProfileList />
    </>
  );
};

export default Home;

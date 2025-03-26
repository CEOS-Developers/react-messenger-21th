import BottomMenu from '@/components/home/BottomMenu';
import ListSection from '@/components/home/ListSection';
import NavBar from '@/components/home/NavBar';
import ProfileSection from '@/components/home/ProfileSection';

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <NavBar />
      <ProfileSection />
      <ListSection />
      <BottomMenu />
    </div>
  );
};

export default Home;

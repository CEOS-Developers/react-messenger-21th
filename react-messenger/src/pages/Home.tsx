import BottomMenu from '@/components/home/BottomMenu';
import ListSection from '@/components/home/ListSection';
import NavBar from '@/components/home/NavBar';
import ProfileSection from '@/components/home/ProfileSection';

const Home = () => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="pt-[44.6px]">
        <ProfileSection />
        <ListSection />
        <BottomMenu />
      </div>
    </div>
  );
};

export default Home;

import BottomMenu from '@/components/home/BottomMenu';
import ListSection from '@/components/home/ListSection';
import NavBar from '@/components/home/NavBar';
import ProfileSection from '@/components/home/ProfileSection';
import StatusBar from '@/components/statusbar/StatusBar';

const Home = () => {
  return (
    <div className="w-full h-full bg-grey-50">
      <div className="sticky top-0 z-10 bg-grey-50">
        <StatusBar />
        <NavBar />
      </div>
      <div className="h-full max-h-[637px] overflow-y-auto pb-4">
        <ProfileSection />
        <ListSection />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Home;

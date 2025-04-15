import NavBar from '@/components/common/NavBar';
import ListSection from '@/components/home/ListSection';
import TopBar from '@/components/home/TopBar';
import ProfileSection from '@/components/home/ProfileSection';
import StatusBar from '@/components/statusbar/StatusBar';

const Home = () => {
  return (
    <div className="w-full h-full bg-grey-50">
      <div className="sticky top-0 z-10 bg-grey-50">
        <StatusBar />
        <TopBar />
      </div>
      <div className="h-full max-h-[637px] overflow-y-auto pb-4">
        <ProfileSection />
        <ListSection />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;

import NavBar from '@/components/common/NavBar';
import ListSection from '@/components/home/ListSection';
import TopBar from '@/components/home/TopBar';
import ProfileSection from '@/components/home/ProfileSection';
import { useStatusBar } from '@/hooks/useStatusBar';

const Home = () => {
  const { offsetClass } = useStatusBar();
  return (
    <div className="flex flex-col w-full h-[786px] relative">
      <div className={`sticky ${offsetClass} z-10 bg-grey-50`}>
        <TopBar />
      </div>
      <div className="h-full max-h-[637px] overflow-y-auto bg-grey-50 pb-4">
        <ProfileSection />
        <ListSection />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;

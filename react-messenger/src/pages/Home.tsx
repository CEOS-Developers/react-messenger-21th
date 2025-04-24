import NavBar from '@/components/common/NavBar';
import ListSection from '@/components/home/ListSection';
import TopBar from '@/components/home/TopBar';
import ProfileSection from '@/components/home/ProfileSection';
import { useStatusBar } from '@/hooks/useStatusBar';
import clsx from 'clsx';

const Home = () => {
  const { offsetClass, hideStatusBar } = useStatusBar();

  return (
    <div className="flex flex-col w-full h-full bg-grey-50">
      <div className={`${offsetClass} z-10 bg-grey-50`}>
        <TopBar />
      </div>
      <div
        className={clsx(
          'h-full overflow-y-auto pb-4 scrollbar-hide',
          hideStatusBar ? 'mt-[44px] mb-[86px]' : 'max-h-[637px]',
        )}
      >
        <ProfileSection />
        <ListSection />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;

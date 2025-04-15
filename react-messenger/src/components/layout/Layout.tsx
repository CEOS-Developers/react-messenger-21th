import { Outlet } from 'react-router-dom';
import StatusBar from '@/components/statusbar/StatusBar';
import { useStatusBar } from '@/hooks/useStatusBar';

const Layout = () => {
  const { hideStatusBar } = useStatusBar();

  return (
    <div className="w-screen min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[375px] h-[812px] flex flex-col relative">
        {!hideStatusBar && (
          <div className="h-[44px] absolute top-0 left-0 right-0 z-20 pointer-events-none">
            <StatusBar />
          </div>
        )}
        <div className={`flex-1 ${hideStatusBar ? 'h-[812px]' : 'h-[768px]'} `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

import { Outlet, useLocation } from 'react-router-dom';
import StatusBar from '@/components/common/StatusBar/StatusBar';
import Navbar from '@/components/layout/Navbar/Navbar';
import Indicator from '@/components/common/Indicator/Indicator';

function Layout() {
  const { pathname } = useLocation();
  const isProfile = pathname.startsWith('/profile/');

  return (
    <div className="relative w-phone-width h-phone-height bg-grayscale-07-white">
      <StatusBar isProfile={isProfile} />
      <Outlet />
      <Navbar />
      <Indicator isProfile={isProfile} />
    </div>
  );
}

export default Layout;

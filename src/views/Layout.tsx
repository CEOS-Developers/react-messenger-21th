import { Outlet, useLocation } from 'react-router-dom';
import StatusBar from '@/components/common/StatusBar';
import Navbar from '@/components/layout/Navbar/Navbar';

function Layout() {
  const { pathname } = useLocation();
  const isProfile = pathname.startsWith('/profile/');

  return (
    <div className="relative max-w-phone-width mx-auto">
      <StatusBar />
      <Outlet />
      <Navbar isProfile={isProfile} />
    </div>
  );
}

export default Layout;

import { Outlet, useMatch } from 'react-router-dom';
import StatusBar from '@/components/common/StatusBar/StatusBar';
import Navbar from '@/components/layout/Navbar/Navbar';
import Indicator from '@/components/common/Indicator/Indicator';

function Layout() {
  const isProfile = useMatch('/profile/:userId') !== null;
  const isChatRoom = useMatch('/chat/:chatId') !== null;

  return (
    <div className="relative w-100 h-screan max-w-phone-width max-h-phone-height bg-grayscale-07-white">
      <StatusBar isProfile={isProfile} isChatRoom={isChatRoom} />
      <Outlet />
      {!isChatRoom && !isProfile && <Navbar />}
      {!isChatRoom && <Indicator isProfile={isProfile} />}
    </div>
  );
}

export default Layout;

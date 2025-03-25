import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar/Navbar';

function Layout() {
  return (
    <div className="relative max-w-phone-width mx-auto">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default Layout;

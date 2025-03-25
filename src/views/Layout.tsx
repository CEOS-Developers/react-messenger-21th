import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="relative max-w-phone-width mx-auto">
      <Outlet />
    </div>
  );
}

export default Layout;

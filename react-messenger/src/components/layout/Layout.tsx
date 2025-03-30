import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[375px] h-[812px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

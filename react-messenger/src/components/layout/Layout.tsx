import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Onboarding from '@/pages/OnBoarding';

const Layout = () => {
  const { pathname } = useLocation();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('onBoarding');

    if (pathname === '/' && !hasSeen) {
      setShowOnboarding(true);
      const timer = setTimeout(() => {
        sessionStorage.setItem('onBoarding', 'true');
        setShowOnboarding(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowOnboarding(false);
    }
  }, [pathname]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] min-h-screen">{showOnboarding ? <Onboarding /> : <Outlet />}</div>
    </div>
  );
};

export default Layout;

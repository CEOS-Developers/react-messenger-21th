import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Onboarding from '@/pages/OnBoarding';

const Layout = () => {
  const { pathname } = useLocation();
  const [hasChecked, setHasChecked] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (pathname === '/') {
      const hasSeen = sessionStorage.getItem('onBoarding');
      if (!hasSeen) {
        setShowOnboarding(true);
        const timer = setTimeout(() => {
          sessionStorage.setItem('onBoarding', 'true');
          setShowOnboarding(false);
        }, 3000);
        setHasChecked(true);
        return () => clearTimeout(timer);
      }
    }
    setHasChecked(true); // onboarding 안 봐도 체크 완료
  }, [pathname]);

  if (!hasChecked) return null;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[375px] min-h-screen">{pathname === '/' && showOnboarding ? <Onboarding /> : <Outlet />}</div>
    </div>
  );
};

export default Layout;

import { useLocation } from 'react-router-dom';
import { useMobile } from './useMobile';

export const useStatusBar = () => {
  const location = useLocation();
  const isMobile = useMobile();

  const hideStatusBar = isMobile || location.pathname === '/';
  const offsetClass = hideStatusBar ? 'mt-0 top-0' : 'mt-[44px] top-[44px]';

  return { hideStatusBar, offsetClass };
};

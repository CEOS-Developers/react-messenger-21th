import { useLocation } from 'react-router-dom';
import { useMobile } from './useMobile';

const HIDDEN_PATHS = ['/'];

export const useStatusBar = () => {
  const location = useLocation();
  const isMobile = useMobile();

  const hideStatusBar = isMobile || HIDDEN_PATHS.includes(location.pathname);
  const offsetClass = hideStatusBar ? 'fixed mt-0 top-0' : 'sticky mt-[44px] top-[44px]';

  return { hideStatusBar, offsetClass };
};

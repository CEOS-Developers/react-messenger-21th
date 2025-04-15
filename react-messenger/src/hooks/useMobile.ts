import { useEffect, useState } from 'react';

const MOBILE_REGEX = /iPhone|iPad|iPod|Android/i;

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(MOBILE_REGEX.test(userAgent));
  }, []);

  return isMobile;
};

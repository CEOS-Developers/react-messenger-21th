import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/svgs/onBoarding/Logo.svg?url';

const OnBoarding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-primary-0 w-full h-full flex justify-center items-center">
      <img src={Logo} alt="logo" width={280} height={280} />
    </div>
  );
};

export default OnBoarding;

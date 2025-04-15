import { useEffect, useState } from 'react';
import Cellular from '@/assets/svgs/statusbar/Cellular.svg?url';
import Battery from '@/assets/svgs/statusbar/Battery.svg?url';
import Wifi from '@/assets/svgs/statusbar/Wifi.svg?url';

const StatusBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    update();
    const interval = setInterval(update, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center bg-transparent w-full h-[44px] p-[13px_23.853px_13.334px_24px]">
      <span className="text-[15px] text-black font-helvetica">{time}</span>
      <div className="flex gap-[5px]">
        <img src={Cellular} alt="cellular" className="w-[17px] h-[10.6px]" />
        <img src={Wifi} alt="wifi" className="w-[15.3px] h-[10.9px]" />
        <img src={Battery} alt="battery" className="w-[24.3px] h-[11.3px]" />
      </div>
    </div>
  );
};

export default StatusBar;

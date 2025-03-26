import { useEffect, useState, useRef } from 'react';

function useClock(): string {
  const [time, setTime] = useState(getCurrentTime());
  const prevTimeRef = useRef(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = getCurrentTime();

      if (prevTimeRef.current != now) {
        prevTimeRef.current = now;
        setTime(now);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export { useClock };

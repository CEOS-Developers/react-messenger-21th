import { useEffect, useState } from 'react';

function useClock(): string {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      setTime(getCurrentTime());

      const intervalId = setInterval(() => {
        setTime(getCurrentTime());
      }, 60_000); // 60 * 1000

      return () => clearInterval(intervalId);
    }, msUntilNextMinute);

    return () => clearTimeout(timeoutId);
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

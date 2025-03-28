import { Profile } from '@/types/types';

export const getTodayBirthdays = (profiles: Profile[] = []) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  return profiles.filter((profile) => {
    const [, month, day] = profile.birthday.split('.').map(Number);
    return month === todayMonth && day === todayDate;
  });
};

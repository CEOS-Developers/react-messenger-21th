import { Profile } from '@/types/types';

export const getTodayBirthdays = (
  profiles1: Profile[] = [],
  profiles2: Profile[] = []
) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const filterTodayBirthdays = (profiles: Profile[]) => {
    return profiles.filter((profile) => {
      const [year, month, day] = profile.birthday.split('.').map(Number);
      return month === todayMonth && day === todayDate;
    });
  };

  return [
    ...filterTodayBirthdays(profiles1),
    ...filterTodayBirthdays(profiles2),
  ];
};

import { UserProfile } from '@/schemas/userProfile';

export const getBirthdayFriends = (friendList: UserProfile[]) => {
  const today = new Date();
  // const todayYear = today.getFullYear();
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
  const todayDate = String(today.getDate()).padStart(2, '0');

  const birthdayFriends = friendList.filter((friend) => {
    const [, month, date] = friend.birthday.split('-');
    // const anniversary = todayYear - Number(year) + 1; // 한국 나이 기준

    const isBirthday = month === todayMonth && date === todayDate;

    // if (isBirthday) {
    //   console.log(`${friend.username}: ${anniversary}살`);
    // }

    return isBirthday;
  });

  return birthdayFriends;
};

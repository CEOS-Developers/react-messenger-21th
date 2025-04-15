import data from '@/data/users.json';

type CurrentUser = {
  id: number;
  name: string;
  profileImg: string;
  backgroundImg?: string;
  comment?: string;
};

export const getCurrentUser = (): CurrentUser => {
  const profileSection = data.find((item) => item.group === '내 프로필');
  return (
    profileSection?.user ?? {
      id: 0,
      name: '',
      profileImg: '',
      backgroundImg: '',
      comment: '',
    }
  );
};

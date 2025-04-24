import data from '@/data/users.json';

type CurrentUser = {
  id: number;
  name: string;
  profileImg: string;
  backgroundImg?: string;
  comment?: string;
};

export const getCurrentUser = (): CurrentUser => {
  return (
    data.myProfile ?? {
      id: 0,
      name: '',
      profileImg: '',
      backgroundImg: '',
      comment: '',
    }
  );
};

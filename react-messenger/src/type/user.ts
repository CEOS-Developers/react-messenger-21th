export type User = {
  id: number;
  name: string;
  profileImg: string;
  backgroundImg: string;
  comment: string;
};

export type Group = {
  id: number;
  groupName: string;
  profileImg: string;
  backgroundImg: string;
  members: User[];
  comment: string;
};

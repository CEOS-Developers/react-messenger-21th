import { JSX } from 'react/jsx-runtime';

import { UserProfile } from '@/types/Profile';

import * as S from './FriendPageSubTitle.styled';

type FriendPageSubTitleProps = {
  subTitle: string;
  friendList: UserProfile[];
};

const FriendPageSubTitle = ({
  subTitle,
  friendList,
}: FriendPageSubTitleProps): JSX.Element => {
  return (
    <S.FriendPageSubTitle>
      {subTitle}
      <span>{friendList.length}</span>
    </S.FriendPageSubTitle>
  );
};

export default FriendPageSubTitle;

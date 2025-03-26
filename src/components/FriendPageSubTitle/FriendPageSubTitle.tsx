import { JSX } from 'react/jsx-runtime';

import { Friend } from '@/types/Friend';

import * as S from './FriendPageSubTitle.styled';

type FriendPageSubTitleProps = {
  subTitle: string;
  friendList: Friend[];
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

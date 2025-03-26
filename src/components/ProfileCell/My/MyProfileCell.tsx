import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import { PlusIcon } from '@/icons/Friend';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import * as S from './MyProfileCell.styled';
import FriendDivider from '@/components/Divider/FriendDivider';

type MyProfileCellProps = {
  profileName: string;
};

const MyProfileCell = ({
  profileName = '김철흥',
}: MyProfileCellProps): JSX.Element => {
  return (
    <>
      <S.MyProfileCellContainer>
        <S.MyProfileInfoSection>
          <ProfileImageBox size={PROFILE_SIZE_LIST.MyProfile} />
          <S.MyProfileName>{profileName}</S.MyProfileName>
        </S.MyProfileInfoSection>
        <S.MultiProfileButton>
          멀티프로필
          <PlusIcon />
        </S.MultiProfileButton>
      </S.MyProfileCellContainer>
      <FriendDivider />
    </>
  );
};

export default MyProfileCell;

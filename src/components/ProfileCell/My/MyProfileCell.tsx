import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';
import { MY_USER_INFO } from '@/constants/User';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';
import MultiProfileButton from '@/components/Button/MultiProfile/MultiProfileButton';

import { useProfileOpen } from '@/stores/useProfileOpen';

import * as S from './MyProfileCell.styled';

type MyProfileCellProps = {
  profileName?: string;
};

const MyProfileCell = ({
  profileName = '김철흥',
}: MyProfileCellProps): JSX.Element => {
  const { openProfile } = useProfileOpen();

  return (
    <S.MyProfileCellWrapper>
      <S.MyProfileCellContainer onClick={() => openProfile(MY_USER_INFO)}>
        <S.MyProfileInfoSection>
          <ProfileImageBox size={PROFILE_SIZE_LIST.my} username={profileName} />
          <S.MyProfileName>{profileName}</S.MyProfileName>
        </S.MyProfileInfoSection>
        <MultiProfileButton />
      </S.MyProfileCellContainer>
    </S.MyProfileCellWrapper>
  );
};

export default MyProfileCell;

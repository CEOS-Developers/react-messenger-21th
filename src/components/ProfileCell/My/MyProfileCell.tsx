import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';
import MultiProfileButton from '@/components/Button/MultiProfile/MultiProfileButton';

import * as S from './MyProfileCell.styled';

type MyProfileCellProps = {
  profileName?: string;
};

const MyProfileCell = ({
  profileName = '김철흥',
}: MyProfileCellProps): JSX.Element => {
  return (
    <S.MyProfileCellContainer>
      <S.MyProfileInfoSection>
        <ProfileImageBox size={PROFILE_SIZE_LIST.my} />
        <S.MyProfileName>{profileName}</S.MyProfileName>
      </S.MyProfileInfoSection>
      <MultiProfileButton />
    </S.MyProfileCellContainer>
  );
};

export default MyProfileCell;

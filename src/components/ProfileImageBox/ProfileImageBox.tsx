import { JSX } from 'react/jsx-runtime';

import * as S from './ProfileImageBox.styled';
import { DefaultProfileIcon } from '@/icons/Friend';

type ProfileImageProps = {
  size: number;
};

const ProfileImageBox = ({ size }: ProfileImageProps): JSX.Element => {
  return (
    <S.ProfileImageBoxContainer $size={size}>
      <DefaultProfileIcon $size={size} />

      {/* 프로필 이미지가 있을 때, 이미지 표시 */}
      {/* <S.ProfileImage /> */}
    </S.ProfileImageBoxContainer>
  );
};

export default ProfileImageBox;

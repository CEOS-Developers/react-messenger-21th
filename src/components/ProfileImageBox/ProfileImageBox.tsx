import { JSX } from 'react/jsx-runtime';

import * as S from './ProfileImageBox.styled';
import { DefaultProfileIcon } from '@/icons/Friend';
import { getProfileColor } from '@/utils/getProfileColor';

type ProfileImageProps = {
  size: number;
  username: string;
  isProfileUpdated: boolean;
};

const ProfileImageBox = ({
  size,
  username,
  isProfileUpdated = false,
}: ProfileImageProps): JSX.Element => {
  const bgColor = getProfileColor(username);

  return (
    <S.ProfileImageBoxContainer
      $size={size}
      $isProfileUpdated={isProfileUpdated}
    >
      <DefaultProfileIcon $size={size} $bgColor={bgColor} />

      {/* 프로필 이미지가 있을 때, 이미지 표시 */}
      {/* <S.ProfileImage /> */}
    </S.ProfileImageBoxContainer>
  );
};

export default ProfileImageBox;

import { JSX } from 'react/jsx-runtime';

import { DefaultProfileIcon } from '@/icons/Friend';
import { getProfileColor } from '@/utils/getProfileColor';

import * as S from './ProfileImageBox.styled';

type ProfileImageProps = {
  size: number;
  username: string;
  isProfileUpdated?: boolean;
  showSenderInfo?: boolean;
};

const ProfileImageBox = ({
  size,
  username,
  isProfileUpdated = false,
  showSenderInfo = true,
}: ProfileImageProps): JSX.Element => {
  const bgColor = getProfileColor(username);

  return (
    <S.ProfileImageBoxContainer
      $size={size}
      $isProfileUpdated={isProfileUpdated}
      $showSenderInfo={showSenderInfo}
    >
      <DefaultProfileIcon $size={size} $bgColor={bgColor} />

      {/* 프로필 이미지가 있을 때, 이미지 표시 */}
      {/* <S.ProfileImage /> */}
    </S.ProfileImageBoxContainer>
  );
};

export default ProfileImageBox;

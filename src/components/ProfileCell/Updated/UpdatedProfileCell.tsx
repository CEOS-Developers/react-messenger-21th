import { JSX } from 'react/jsx-runtime';

// mock data
import { updatedProfileList } from '@/mock/updatedProfile';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';
import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';

import { useProfileOpen } from '@/stores/useProfileOpen';

import * as S from './UpdatedProfileCell.styled';

const UpdatedProfileCell = (): JSX.Element => {
  const { openProfile } = useProfileOpen();

  return (
    <S.UpdatedProfileCellContainer>
      <FriendPageSubTitle
        subTitle="업데이트한 프로필"
        friendList={updatedProfileList}
      />
      <S.UpdatedProfileScrollSection>
        <S.UpdatedProfileList>
          {updatedProfileList.map((profile) => (
            <S.UpdatedProfileItem key={profile.userId}>
              <S.UpdatedProfileItemLink onClick={() => openProfile(profile)}>
                <ProfileImageBox
                  size={PROFILE_SIZE_LIST.updated}
                  username={profile.username}
                  isProfileUpdated={profile.isUpdated}
                />
                <S.UpdatedProfileName>{profile.username}</S.UpdatedProfileName>
              </S.UpdatedProfileItemLink>
            </S.UpdatedProfileItem>
          ))}
        </S.UpdatedProfileList>
      </S.UpdatedProfileScrollSection>
    </S.UpdatedProfileCellContainer>
  );
};

export default UpdatedProfileCell;

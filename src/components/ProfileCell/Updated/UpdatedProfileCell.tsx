import { JSX } from 'react/jsx-runtime';

// mock data
import { updatedProfileList } from '@/mock/updatedProfile';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';
import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';

import * as S from './UpdatedProfileCell.styled';

const UpdatedProfileCell = (): JSX.Element => {
  return (
    <S.UpdatedProfileCellContainer>
      <FriendPageSubTitle
        subTitle="업데이트한 프로필"
        friendList={updatedProfileList}
      />
      <S.UpdatedProfileScrollSection>
        <S.UpdatedProfileList>
          {updatedProfileList.map((profile) => (
            <S.UpdatedProfileItem key={profile.id}>
              <S.UpdatedProfileItemLink>
                <ProfileImageBox size={PROFILE_SIZE_LIST.updated} />
                <S.UpdatedProfileName>{profile.name}</S.UpdatedProfileName>
              </S.UpdatedProfileItemLink>
            </S.UpdatedProfileItem>
          ))}
        </S.UpdatedProfileList>
      </S.UpdatedProfileScrollSection>
    </S.UpdatedProfileCellContainer>
  );
};

export default UpdatedProfileCell;

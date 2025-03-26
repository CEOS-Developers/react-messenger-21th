import { JSX } from 'react/jsx-runtime';

// mock data
import { updatedProfileList } from '@/mock/updatedProfile';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import * as S from './UpdatedProfileCell.styled';
import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';

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
                <ProfileImageBox size={40} />
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

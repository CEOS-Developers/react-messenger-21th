import { JSX } from 'react/jsx-runtime';

// mock data
import { updatedProfileList } from '@/mock/updatedProfile';

import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import * as S from './UpdatedProfileCell.styled';

const UpdatedProfileCell = (): JSX.Element => {
  return (
    <S.UpdatedProfileCellContainer>
      <S.UpdatedProfileCellTitle>
        업데이트한 프로필<span>{updatedProfileList.length}</span>
      </S.UpdatedProfileCellTitle>
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

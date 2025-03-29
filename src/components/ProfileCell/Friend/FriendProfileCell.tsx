import { JSX } from 'react/jsx-runtime';

import { friendProfileList } from '@/mock/friendProfile';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';
import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import { useProfileOpen } from '@/stores/useProfileOpen';

import * as S from './FriendProfileCell.styled';

const FriendProfileCell = (): JSX.Element => {
  const { openProfile } = useProfileOpen();

  return (
    <S.FriendProfileCellWrapper>
      <FriendPageSubTitle subTitle="친구" friendList={friendProfileList} />
      <S.FriendProfileCellSection>
        <S.FriendProfileCellList>
          {friendProfileList.map((profile) => (
            <S.FriendProfileCellItem key={profile.userId}>
              <S.FriendProfileCellItemLink onClick={() => openProfile(profile)}>
                <ProfileImageBox
                  size={PROFILE_SIZE_LIST.basic}
                  username={profile.username}
                />
                <S.FriendProfileName>{profile.username}</S.FriendProfileName>
              </S.FriendProfileCellItemLink>
            </S.FriendProfileCellItem>
          ))}
        </S.FriendProfileCellList>
      </S.FriendProfileCellSection>
    </S.FriendProfileCellWrapper>
  );
};

export default FriendProfileCell;

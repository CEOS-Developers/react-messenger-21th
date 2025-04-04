import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';
import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import { useProfileOpen } from '@/stores/useProfileOpen';
import { useFriendListStore } from '@/stores/useFriendListStore';

import { useFriendList } from '@/hooks/useFriendList';

import * as S from './FriendProfileCell.styled';

const FriendProfileCell = (): JSX.Element => {
  const { openProfile } = useProfileOpen();

  // 친구 리스트 불러오기
  useFriendList();

  // 친구 리스트 상태 관리
  const { friendList } = useFriendListStore();

  return (
    <S.FriendProfileCellWrapper>
      <FriendPageSubTitle subTitle="친구" friendList={friendList} />
      <S.FriendProfileCellSection>
        <S.FriendProfileCellList>
          {friendList.map((profile) => (
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

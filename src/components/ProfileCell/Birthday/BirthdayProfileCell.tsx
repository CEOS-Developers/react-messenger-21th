import { JSX } from 'react/jsx-runtime';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';
import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';
import GiftButton from '@/components/Button/Gift/GiftButton';

import { UserProfile } from '@/schemas/userProfile';
import { useProfileOpen } from '@/stores/useProfileOpen';

import { formatDate } from '@/utils/formatDate';

import * as S from './BirthdayProfileCell.styled';

type BirthdayProfileCellProps = {
  birthdayFriendList: UserProfile[];
};

const BirthdayProfileCell = ({
  birthdayFriendList,
}: BirthdayProfileCellProps): JSX.Element => {
  const todayDate = formatDate();

  const { openProfile } = useProfileOpen();

  return (
    <S.BirthdayProfileCellContainer>
      <FriendPageSubTitle
        subTitle="생일인 친구"
        friendList={birthdayFriendList}
      />
      <S.BirthdayProfileSection>
        <S.BirthdayProfileCellList>
          {birthdayFriendList.map((profile) => (
            <S.BirthdayProfileCellItem key={profile.userId}>
              <S.BirthdayProfileCellItemLink
                onClick={() => openProfile(profile)}
              >
                <S.BirthdayProfileInfoBox>
                  <ProfileImageBox
                    size={PROFILE_SIZE_LIST.basic}
                    username={profile.username}
                  />
                  <S.BirthdatProfileTextInfo>
                    <S.BirthdayProfileName>
                      {profile.username}
                    </S.BirthdayProfileName>
                    <S.Birthday>오늘 {todayDate}</S.Birthday>
                  </S.BirthdatProfileTextInfo>
                </S.BirthdayProfileInfoBox>
                <GiftButton />
              </S.BirthdayProfileCellItemLink>
            </S.BirthdayProfileCellItem>
          ))}
        </S.BirthdayProfileCellList>
      </S.BirthdayProfileSection>
    </S.BirthdayProfileCellContainer>
  );
};

export default BirthdayProfileCell;

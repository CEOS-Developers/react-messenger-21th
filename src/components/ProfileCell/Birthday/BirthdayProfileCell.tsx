import { JSX } from 'react/jsx-runtime';

import { birthdayProfileList } from '@/mock/birthdayProfile';

import { PROFILE_SIZE_LIST } from '@/constants/Profile';

import FriendPageSubTitle from '@/components/FriendPageSubTitle/FriendPageSubTitle';
import ProfileImageBox from '@/components/ProfileImageBox/ProfileImageBox';

import { formatDate } from '@/utils/formatDate';

import * as S from './BirthdayProfileCell.styled';
import GiftButton from '@/components/Button/Gift/GiftButton';

const BirthdayProfileCell = (): JSX.Element => {
  const todayDate = formatDate();

  return (
    <S.BirthdayProfileCellContainer>
      <FriendPageSubTitle
        subTitle="생일인 친구"
        friendList={birthdayProfileList}
      />
      <S.BirthdayProfileSection>
        <S.BirthdayProfileCellList>
          {birthdayProfileList.map((profile) => (
            <S.BirthdayProfileCellItem key={profile.id}>
              <S.BirthdayProfileCellItemLink>
                <S.BirthdayProfileInfoBox>
                  <ProfileImageBox size={PROFILE_SIZE_LIST.basic} />
                  <S.BirthdatProfileTextInfo>
                    <S.BirthdayProfileName>
                      {profile.name}
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

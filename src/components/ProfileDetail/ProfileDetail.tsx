import { JSX } from 'react/jsx-runtime';

import * as C from '@/constants/Profile';

import { CancelIcon } from '@/icons/Profile';
import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import { UserProfile } from '@/types/Profile';

import { useProfileOpen } from '@/stores/useProfileOpen';

import * as S from './ProfileDetail.styled';

type ProfileDetailProps = {
  userProfile: UserProfile;
};

const ProfileDetail = ({ userProfile }: ProfileDetailProps): JSX.Element => {
  const { closeProfile } = useProfileOpen();

  return (
    <S.ProfileDetailContainer
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
    >
      <S.ProfileDetailHeaderSection>
        <S.ProfileDetailOptionButton onClick={closeProfile}>
          <CancelIcon />
        </S.ProfileDetailOptionButton>
        <S.ProfileDetailSubOptionList>
          {C.PROFILE_DETAIL_SUB_OPTION_LIST.map((option) => (
            <S.ProfileDetailOptionItem key={option.id}>
              <S.ProfileDetailOptionButton>
                <option.icon />
              </S.ProfileDetailOptionButton>
            </S.ProfileDetailOptionItem>
          ))}
        </S.ProfileDetailSubOptionList>
      </S.ProfileDetailHeaderSection>

      <S.ProfileDetailMainSection>
        <ProfileImageBox
          size={C.PROFILE_SIZE_LIST.detail}
          username={userProfile.username}
        />
        <S.ProfileUsername>{userProfile.username}</S.ProfileUsername>
        <S.ProfileDetailMainOptionSection>
          <S.ProfileDetailMainOptionList>
            {C.PROFILE_DETAIL_MAIN_OPTION_LIST.map((option) => (
              <S.ProfileDetailOptionItem key={option.id}>
                <S.ProfileDetailOptionLink>
                  <option.icon />
                  {option.name}
                </S.ProfileDetailOptionLink>
              </S.ProfileDetailOptionItem>
            ))}
          </S.ProfileDetailMainOptionList>
        </S.ProfileDetailMainOptionSection>
      </S.ProfileDetailMainSection>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;

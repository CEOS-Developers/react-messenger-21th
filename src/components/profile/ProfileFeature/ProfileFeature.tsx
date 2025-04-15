import * as S from './ProfileFeature.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/profile';
import { PROFILE_ITEMS } from '@/constants/profile';

type ProfileFeatureProps = {
  user: Types.User;
  isMine: boolean;
};

function ProfileFeature({ user, isMine }: ProfileFeatureProps) {
  const items = PROFILE_ITEMS[isMine ? 1 : 0];

  return (
    <S.ProfileFeatureWrapper>
      <S.MainSection>
        <Icons.ProfileImage className={`w-[109px] h-[109px] ${user.profileColor}`} />
        <div>
          <span className="!text-headline-01 text-grayscale-07-white">{user.name}</span>
          <span className="!text-subhead-02 text-grayscale-07-white">{user.status}</span>
        </div>
      </S.MainSection>
      <S.FeatureSection>
        {items.map(({ label, Icon, isButton }) =>
          isButton ? (
            <div>
              <button className="cursor-pointer">
                <Icon className="w-[32px] h-[32px]" />
              </button>
              <span className="!text-profile text-grayscale-07-white">{label}</span>
            </div>
          ) : (
            <div>
              <Icon className="w-[32px] h-[32px]" />
              <span className="!text-profile text-grayscale-07-white">{label}</span>
            </div>
          ),
        )}
      </S.FeatureSection>
    </S.ProfileFeatureWrapper>
  );
}

export default ProfileFeature;

import { useNavigate } from 'react-router-dom';
import * as S from './ProfileFeature.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/profile';
import { PROFILE_ITEMS } from '@/constants/profile';

type ProfileFeatureProps = {
  userId: string;
  user: Types.User;
  myId: string;
  isMine: boolean;
  onCreateChat: (myId: string, userId: string, user: Types.User) => string;
};

function ProfileFeature({ userId, user, myId, isMine, onCreateChat }: ProfileFeatureProps) {
  const navigate = useNavigate();

  const items = PROFILE_ITEMS[isMine ? 1 : 0];

  const onClickToCreatChat = (myId: string, userId: string, user: Types.User) => {
    const chatId = onCreateChat(myId, userId, user);
    navigate(`/chat/${chatId}`);
  };

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
            <div key={`${userId}-${label}`}>
              <button onClick={() => onClickToCreatChat(myId, userId, user)} className="cursor-pointer">
                <Icon className="w-[32px] h-[32px]" />
              </button>
              <span className="!text-profile text-grayscale-07-white">{label}</span>
            </div>
          ) : (
            <div key={`${userId}-${label}`}>
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

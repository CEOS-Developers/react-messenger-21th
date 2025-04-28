import { Link } from 'react-router-dom';
import * as S from './UserMe.Styled';
import * as Types from '@/types';
import { ProfileImage } from '@/assets/icons/profile';

type UserMeProps = {
  myId: string;
  user: Types.User;
};

function UserMe({ myId, user }: UserMeProps) {
  return (
    <S.UserMeWrapper className="shadow-[inset_0_1px_0_0_theme(colors.grayscale-05)]">
      <ProfileImage className={`w-[72px] h-[72px] ${user.profileColor}`} />
      <Link to={`profile/${myId}`} className="profile-link">
        <span className="!text-headline-03 text-grayscale-00-black">{user.name}</span>
        <span className="!text-subhead-02 text-grayscale-02">{user.status}</span>
      </Link>
    </S.UserMeWrapper>
  );
}

export default UserMe;

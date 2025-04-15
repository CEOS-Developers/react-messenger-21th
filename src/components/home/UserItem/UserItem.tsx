import { Link } from 'react-router-dom';
import * as S from './UserItem.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/home';
import { ProfileImage } from '@/assets/icons/profile';

type UserItemProps = {
  userId: string;
  user: Types.User;
  onToggleFavorite: (chatId: string) => void;
};

function UserItem({ userId, user, onToggleFavorite }: UserItemProps) {
  return (
    <S.UserItemWrapper>
      <div>
        <ProfileImage className={`w-[48px] h-[48px] ${user.profileColor}`} />
        <Link to="" className="profile-link">
          <span className="!text-subhead-02 text-grayscale-00-black">{user.name}</span>
          <span className="!text-subhead-03 text-grayscale-02">{user.status}</span>
        </Link>
      </div>
      {user.isFavorite && (
        <button onClick={() => onToggleFavorite(userId)} className="cursor-pointer">
          <Icons.Star className="w-[24px] h-[24px]" />
        </button>
      )}
    </S.UserItemWrapper>
  );
}

export default UserItem;

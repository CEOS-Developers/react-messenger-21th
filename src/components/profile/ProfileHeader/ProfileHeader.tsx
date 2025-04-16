import { Link } from 'react-router-dom';
import * as S from './ProfileHeader.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/profile';

type ProfileHeaderProps = {
  userId: string;
  user: Types.User;
  isMine: boolean;
  onToggleFavorite: (userId: string) => void;
};

function ProfileHeader({ userId, user, isMine, onToggleFavorite }: ProfileHeaderProps) {
  const Star = user.isFavorite ? Icons.StarOn : Icons.StarOff;

  return (
    <S.ProfileHeaderWrapper>
      <Link to="/">
        <Icons.Delete className="w-[24px] h-[24px] text-grayscale-07-white" />
      </Link>
      <div>
        <button onClick={() => onToggleFavorite(userId)} className="cursor-pointer">
          {!isMine && <Star className="w-[24px] h-[24px]" />}
        </button>
        <a href={user.blogUrl} target="_blank" rel="noopener noreferrer">
          <Icons.Blog className="w-[24px] h-[24px]" />
        </a>
        {isMine ? (
          <Icons.Settings className="w-[24px] h-[24px] text-grayscale-07-white" />
        ) : (
          <Icons.Etc className="w-[24px] h-[24px] text-grayscale-07-white" />
        )}
      </div>
    </S.ProfileHeaderWrapper>
  );
}

export default ProfileHeader;

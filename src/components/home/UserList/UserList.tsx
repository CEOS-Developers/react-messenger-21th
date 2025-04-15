import { useState } from 'react';
import * as S from './UserList.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/home';
import UserItem from '../UserItem/UserItem';

type UserListProps = {
  userList: Types.UserList;
  isFavorite: boolean;
  isSearch: boolean;
  onToggleFavorite: (chatId: string) => void;
};

function UserList({ userList, isFavorite, isSearch, onToggleFavorite }: UserListProps) {
  const [isDrop, setIsDrop] = useState(true);

  if (!isFavorite && !isSearch) return <></>;

  return (
    <S.UserListWrapper className="shadow-[inset_0_1px_0_0_theme(colors.grayscale-05)]">
      <S.HeaderSection>
        <div>
          <span className="!text-headline-06 text-grayscale-00-black">{`${isFavorite ? '즐겨찾기' : isSearch ? '친구' : ''}`}</span>
          <span className="!text-headline-06 text-grayscale-02">{Object.keys(userList).length}</span>
        </div>
        {isFavorite && (
          <button onClick={() => setIsDrop(!isDrop)} className="cursor-pointer">
            <Icons.DropDown className={`w-[24px] h-[24px] text-grayscale-03 ${isDrop ? 'rotate-180' : ''}`} />
          </button>
        )}
        {isSearch && <div></div>}
      </S.HeaderSection>
      {isDrop &&
        Object.entries(userList).map(([userId, user]) => (
          <UserItem key={userId} userId={userId} user={user} onToggleFavorite={onToggleFavorite} />
        ))}
    </S.UserListWrapper>
  );
}

export default UserList;

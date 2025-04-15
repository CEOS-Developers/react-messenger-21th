import { useState } from 'react';
import * as S from './UserList.Styled';
import * as Types from '@/types';
import * as Icons from '@/assets/icons/home';
import UserItem from '../UserItem/UserItem';

type UserListProps = {
  userList: Types.UserList;
  isFavorite: boolean;
  isSearch: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
  onToggleFavorite: (chatId: string) => void;
};

function UserList({ userList, isFavorite, isSearch, searchValue, setSearchValue, onToggleFavorite }: UserListProps) {
  const [isDrop, setIsDrop] = useState(true);

  if (!isFavorite && !isSearch) return <></>;

  return (
    <S.UserListWrapper>
      <S.HeaderSection
        $isFavorite={isFavorite}
        $isSearch={isSearch}
        className={`shadow-[inset_0_1px_0_0_theme(colors.grayscale-05)] ${isSearch ? 'bg-white-tp-01' : ''}`}
      >
        <div>
          <span className="!text-headline-06 text-grayscale-00-black">{`${isFavorite ? '즐겨찾기' : isSearch ? '친구' : ''}`}</span>
          <span className="!text-headline-06 text-grayscale-02">{Object.keys(userList).length}</span>
        </div>
        {isFavorite && (
          <button onClick={() => setIsDrop(!isDrop)} className="cursor-pointer">
            <Icons.DropDown className={`w-[24px] h-[24px] text-grayscale-03 ${isDrop ? 'rotate-180' : ''}`} />
          </button>
        )}
        {isSearch && (
          <S.SearchSection className="bg-grayscale-05">
            <Icons.Search className="w-[24px] h-[24px]" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="검색"
              className="!text-caption-02 text-grayscale-00-black placeholder-grayscale-02"
            />
            {searchValue.length > 0 && (
              <button onClick={() => setSearchValue('')} className="cursor-pointer">
                <Icons.Delete className="w-[24px] h-[24px] text-grayscale-03" />
              </button>
            )}
          </S.SearchSection>
        )}
      </S.HeaderSection>
      {isDrop &&
        Object.entries(userList).map(([userId, user]) => (
          <UserItem key={userId} userId={userId} user={user} onToggleFavorite={onToggleFavorite} />
        ))}
    </S.UserListWrapper>
  );
}

export default UserList;

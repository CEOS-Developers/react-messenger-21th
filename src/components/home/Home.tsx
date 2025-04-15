import * as S from './Home.Styled';
import { useMyId, useUserList } from '@/contexts/localStorage';
import HomeHeader from './HomeHeader/HomeHeader';
import UserMe from './UserMe/UserMe';
import UserList from './UserList/UserList';
import { filterFavoriteUserList } from './Home.utils';

function Home() {
  const { myId } = useMyId();
  const { userList, onToggleFavorite } = useUserList();

  // Must render after all data are loaded
  if (!myId || !userList[myId]) return null;

  const otherUserList = { ...userList };
  delete otherUserList[myId];

  const filteredOtherUserList = filterFavoriteUserList(otherUserList);

  return (
    <S.HomeWrapper>
      <HomeHeader />
      <S.UserGroup>
        <UserMe user={userList[myId]} />
        <UserList
          userList={filteredOtherUserList}
          isFavorite={true}
          isSearch={false}
          onToggleFavorite={onToggleFavorite}
        />
        <UserList userList={otherUserList} isFavorite={false} isSearch={true} onToggleFavorite={onToggleFavorite} />
      </S.UserGroup>
    </S.HomeWrapper>
  );
}

export default Home;

import * as Types from '@/types';

function filterFavoriteUserList(userList: Types.UserList): Types.UserList {
  return Object.fromEntries(Object.entries(userList).filter(([, user]) => user.isFavorite));
}

export { filterFavoriteUserList };

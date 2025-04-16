import * as Types from '@/types';

function toggleFavorite(userId: string, userList: Types.UserList): Types.UserList {
  const user = userList[userId];

  const updatedUser = { ...user, isFavorite: !user.isFavorite };
  const updatedUserList = { ...userList, [userId]: updatedUser };

  return updatedUserList;
}

export default toggleFavorite;

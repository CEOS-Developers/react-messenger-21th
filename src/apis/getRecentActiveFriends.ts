import users from '@/assets/data/users.json';
import { UserDto } from '@/pages/ChatRoom/dto';
import { CURRENT_USER_ID } from '@/utils/constants';

export const getRecentActiveFriends = () => {
	const friends = users.filter((user) => user.id !== CURRENT_USER_ID) as UserDto[];
	const sortedFriends = friends.sort((a, b) => new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime());

	return sortedFriends;
};

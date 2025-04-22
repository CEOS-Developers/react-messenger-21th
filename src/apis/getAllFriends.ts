import users from '@/assets/data/users.json';
import { UserDto } from '@/pages/ChatRoom/dto';
import { CURRENT_USER_ID } from '@/utils/constants';

export const getAllFriends = () => {
	const friends = users.filter((user) => user.id !== CURRENT_USER_ID) as UserDto[];

	return friends;
};

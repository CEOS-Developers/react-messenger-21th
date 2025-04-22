import users from '@/assets/data/users.json';
import { UserDto } from '@/pages/ChatRoom/dto';
import { CURRENT_USER_ID } from '@/utils/constants';

export const getCurrentUserInfo = () => {
	const currentUser = users.find((user) => user.id === CURRENT_USER_ID) as UserDto;

	return currentUser;
};

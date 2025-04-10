import type { UserDto } from '@/pages/ChatRoom/dto';
import { CURRENT_USER_ID } from './constants';

export const createOtherUserContent = (joinedUsers: UserDto[]) => {
	const otherUsers = joinedUsers.filter((user) => user.id !== CURRENT_USER_ID);
	if (otherUsers.length === 0) return joinedUsers[0].name; // 내 이름 (나와의 채팅)

	const names = otherUsers.map((user) => user.name);
	const sortedUsers = names.sort((a, b) => a.localeCompare(b));
	const length = names.length;

	switch (length) {
		case 1:
			return sortedUsers[0];
		case 2:
			return `${sortedUsers[0]}, ${sortedUsers[1]}`;
		default:
			return `${sortedUsers[0]}, ${sortedUsers[1]} 외 ${length - 1}명`;
	}
};

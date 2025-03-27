import type { UserDto } from '@/pages/ChatRoom/dto';

export const createOtherUserContent = (otherUsers: UserDto[] | null) => {
	if (otherUsers === null) return '';

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

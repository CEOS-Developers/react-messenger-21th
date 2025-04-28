export interface MessageDto {
	id: string;
	content: string;
	createdAt: string;
	fromUser: UserDto;
}

export interface ChatRoomDto {
	chatRoomId: number;
	chatRoomName: string | null;
	joinedUsers: UserDto[];
	latestMessage: MessageDto;
}

export interface UserDto {
	id: number;
	name: string;
	email: string;
	color: Color;
	isActive: boolean;
	lastActiveAt: string;
}

export type Color = 'blue' | 'purple' | 'yellow' | 'pink' | 'orange';

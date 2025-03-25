export interface MessageDto {
	id: number;
	content: string;
	createdAt: string;
	fromUser: UserDto;
}

export interface UserDto {
	id: number;
	name: string;
	color: string;
}

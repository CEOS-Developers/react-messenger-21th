export interface MessageDto {
	id: string;
	content: string;
	createdAt: string;
	fromUser: UserDto;
}

export interface UserDto {
	id: number;
	name: string;
	color: 'blue' | 'purple' | 'yellow' | 'pink' | 'orange';
}

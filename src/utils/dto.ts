import type { MessageDto, UserDto } from '@/pages/ChatRoom/dto';

// createMessagesByUsers
export interface messagesByUserDto {
	fromUser: UserDto;
	messages: messageByUserDto[];
	isDateVisible: boolean;
}

export type messageByUserDto = Omit<MessageDto, 'fromUser'> & { isTimeVisible: boolean };

import { MessageDto } from '@/pages/ChatRoom/dto';
import { messagesByUserDto } from './dto';

const formatCreatedAt = (date: Date) => {
	return new Intl.DateTimeFormat('ko-KR', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	}).format(new Date(date));
};

// 유저별 메시지를 하나의 배열로 묶음
export const createMessagesByUsers = (messages: MessageDto[]) => {
	const messagesByUsers: messagesByUserDto[] = [];

	messages.forEach((message, i) => {
		const maxIndex = messages.length - 1;
		const currentSenderId = message.fromUser.id;

		const currentCreatedAt = formatCreatedAt(new Date(message.createdAt));
		const prevSenderId = i === 0 ? -1 : messages[i - 1].fromUser.id;
		const nextSenderId = i === maxIndex ? '-1' : messages[i + 1].fromUser.id;
		const nextCreatedAt = i === maxIndex ? '' : formatCreatedAt(new Date(messages[i + 1].createdAt));

		const isTimeVisible = currentCreatedAt !== nextCreatedAt || currentSenderId !== nextSenderId;

		const messagesByUser = { ...message, isTimeVisible };
		const { fromUser, ...otherData } = messagesByUser;

		if (currentSenderId !== prevSenderId) {
			messagesByUsers.push({ fromUser, messages: [otherData] });
		} else {
			const index = messagesByUsers.length - 1;
			messagesByUsers[index].messages.push(otherData);
		}
	});

	return messagesByUsers;
};

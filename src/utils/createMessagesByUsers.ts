import type { MessageDto } from '@/pages/ChatRoom/dto';
import type { messagesByUserDto } from './dto';

import { formatCreatedAt } from './formatCreatedAt';
import { formatDate } from './formatDate';

// 유저별 메시지를 하나의 배열로 묶음
export const createMessagesByUsers = (messages: MessageDto[]) => {
	const messagesByUsers: messagesByUserDto[] = [];

	messages.forEach((message, i) => {
		const maxIndex = messages.length - 1;

		const prevSenderId = i === 0 ? -1 : messages[i - 1].fromUser.id;
		const currentSenderId = message.fromUser.id;
		const nextSenderId = i === maxIndex ? '-1' : messages[i + 1].fromUser.id;

		const currentCreatedAt = formatCreatedAt(new Date(message.createdAt));
		const nextCreatedAt = i === maxIndex ? '' : formatCreatedAt(new Date(messages[i + 1].createdAt));

		const prevDate = i === 0 ? '' : formatDate(new Date(messages[i - 1].createdAt));
		const currentDate = formatDate(new Date(message.createdAt));

		// 시간 표시 여부
		const isTimeVisible = currentCreatedAt !== nextCreatedAt || currentSenderId !== nextSenderId;

		// 상단 날짜(date divider) 표시 여부
		const isDateVisible = currentDate !== prevDate;

		const messagesByUser = { ...message, isTimeVisible };
		const { fromUser, ...otherData } = messagesByUser;

		// sender가 바뀌거나 날짜가 바뀌는 경우 새 user 배열 생성
		if (currentSenderId !== prevSenderId || isDateVisible) {
			messagesByUsers.push({ fromUser, messages: [otherData], isDateVisible });
		} else {
			const index = messagesByUsers.length - 1;
			messagesByUsers[index].messages.push(otherData);
		}
	});

	return messagesByUsers;
};

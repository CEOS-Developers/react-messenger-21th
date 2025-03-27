import { useEffect, useRef } from 'react';

import type { messagesByUserDto } from '@/utils/dto';

import SentMessage from './SentMessage';
import RcvdMessage from './RcvdMessage';
import DateDivider from './DateDivider';

export default function MessageContainer({
	messagesByUsers,
	currentUserId,
}: {
	messagesByUsers: messagesByUserDto[];
	currentUserId: number;
}) {
	const messageContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const scrollToBottom = () => {
			if (messageContainerRef.current) {
				messageContainerRef.current.scrollTo({
					top: messageContainerRef.current.scrollHeight,
					behavior: 'smooth',
				});
			}
		};

		if (messagesByUsers.length > 0) {
			scrollToBottom();
		}
	}, [messagesByUsers, currentUserId]);

	return (
		<div
			ref={messageContainerRef}
			className="flex flex-col gap-3 h-[38.5rem] overflow-y-scroll px-5"
			style={{ scrollbarWidth: 'none' }}
		>
			{messagesByUsers.map((messagesByUser) => (
				<>
					{messagesByUser.isDateVisible && <DateDivider date={new Date(messagesByUser.messages[0].createdAt)} />}
					{messagesByUser.fromUser.id === currentUserId ? (
						<SentMessage key={messagesByUser.messages[0].id} messages={messagesByUser.messages} />
					) : (
						<RcvdMessage key={messagesByUser.messages[0].id} {...messagesByUser} />
					)}
				</>
			))}
		</div>
	);
}

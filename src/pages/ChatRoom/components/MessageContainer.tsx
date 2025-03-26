import { useEffect, useRef } from 'react';

import type { messagesByUserDto } from '@/utils/dto';

import SentMessage from './SentMessage';
import RcvdMessage from './RcvdMessage';

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
			className="flex flex-col h-[38.5rem] overflow-y-scroll px-5"
			style={{ scrollbarWidth: 'none' }}
		>
			{messagesByUsers.map((messagesByUser) =>
				messagesByUser.fromUser.id === currentUserId ? (
					<SentMessage key={messagesByUser.messages[0].id} messages={messagesByUser.messages} />
				) : (
					<RcvdMessage key={messagesByUser.messages[0].id} {...messagesByUser} />
				),
			)}
		</div>
	);
}

import SentArrow from '@/assets/icons/sentArrow.svg?react';

import { formatCreatedAt } from '@/utils/formatCreatedAt';
import type { messageByUserDto } from '@/utils/dto';

import Message from './Message';

export default function SentMessage({ messages }: { messages: messageByUserDto[] }) {
	return (
		<div className="flex flex-col gap-2 py-2.5">
			{messages.map(({ id, createdAt, content, isTimeVisible }, index) => {
				const formattedCreatedAt = formatCreatedAt(createdAt);

				return (
					<div key={id} className="flex justify-end">
						{isTimeVisible && (
							<div className="caption2-regular mr-1.5 mt-auto text-black-500">{formattedCreatedAt}</div>
						)}

						<Message isReceived={false}>
							{index === 0 && <SentArrow className="absolute top-[0.1563rem] -right-2" />}
							{content}
						</Message>
					</div>
				);
			})}
		</div>
	);
}

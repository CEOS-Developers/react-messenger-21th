import RcvdArrow from '@/assets/icons/rcvdArrow.svg?react';

import { getProfileColor } from '@/utils/getProfileColor';
import { formatCreatedAt } from '@/utils/formatCreatedAt';
import type { messagesByUserDto } from '@/utils/dto';

import Message from './Message';
import DefaultProfile from '@/components/DefaultProfile';

export default function RcvdMessage({ fromUser, messages }: messagesByUserDto) {
	const profileBackgroundColor = getProfileColor('background', fromUser.color);
	const profilePathColor = getProfileColor('path', fromUser.color);

	return (
		<div className="flex gap-3 py-2.5">
			<DefaultProfile bgColor={profileBackgroundColor} pathColor={profilePathColor} />

			<div className="flex flex-col gap-2">
				<div className="caption1-medium">{fromUser.name}</div>
				{messages.map(({ id, createdAt, content, isTimeVisible }, index) => (
					<div className="flex" key={id}>
						<Message isReceived={true}>
							{index === 0 && <RcvdArrow className="absolute top-[0.1563rem] -left-2" />}
							{content}
						</Message>

						{isTimeVisible && (
							<div className="ml-1.5 mt-auto caption2-regular text-black-500">{formatCreatedAt(createdAt)}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

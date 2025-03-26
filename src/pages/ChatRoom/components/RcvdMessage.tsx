import RcvdArrow from '@/assets/icons/rcvdArrow.svg?react';
import Profile from '@/assets/icons/profile.svg?react';

import { formatCreatedAt } from '@/utils/formatCreatedAt';
import type { messagesByUserDto } from '@/utils/dto';

import Message from './Message';

export default function RcvdMessage({ fromUser, messages }: messagesByUserDto) {
	const profileBackgroundColor = `bg-profile-${fromUser.color}`;
	const profilePathColor = `color-profile-${fromUser.color}`;

	return (
		<div className="flex gap-3 py-2.5">
			<button
				className={`w-9 h-9 flex justify-center items-center border border-black-100 rounded-full ${profileBackgroundColor}`}
			>
				<Profile width={27} height={27} className={profilePathColor} />
			</button>

			<div className="flex flex-col gap-2">
				<div className="caption1-medium">{fromUser.name}</div>
				{messages.map(({ id, createdAt, content, isTimeVisible }, index) => {
					const formattedCreatedAt = formatCreatedAt(new Date(createdAt));

					return (
						<div className="flex" key={id}>
							<Message isReceived={true}>
								{index === 0 && <RcvdArrow className="absolute top-[0.1563rem] -left-2" />}
								{content}
							</Message>

							{isTimeVisible && (
								<div className="ml-1.5 mt-auto caption2-regular text-black-500">{formattedCreatedAt}</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

import RcvdArrow from '@/assets/icons/rcvdArrow.svg?react';
import Profile from '@/assets/icons/profile.svg?react';
import Message from './Message';
import { messagesByUserDto } from '@/utils/dto';
import { formatCreatedAt } from '@/utils/formatCreatedAt';

export default function RcvdMessage({ fromUser, messages }: messagesByUserDto) {
	return (
		<div className="flex gap-3 py-2.5">
			<button className="w-9 h-9 flex justify-center items-center border border-black-100 rounded-full bg-profile-blue">
				<Profile width={27} height={27} className="color-profile-blue" />
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

							{isTimeVisible && <div className="ml-1.5 mt-auto caption2-regular">{formattedCreatedAt}</div>}
						</div>
					);
				})}
			</div>
		</div>
	);
}

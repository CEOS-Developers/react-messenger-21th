import RcvdArrow from '@/assets/icons/rcvdArrow.svg?react';
import Profile from '@/assets/icons/profile.svg?react';
import Message from './Message';

export default function RcvdMessage() {
	return (
		<div className="flex gap-3 py-2.5">
			<button className="w-9 h-9 flex justify-center items-center border border-black-100 rounded-full bg-profile-blue">
				<Profile width={27} height={27} className="color-profile-blue" />
			</button>

			<div className="flex flex-col gap-2">
				<div className="caption1-medium">임이솔</div>

				<div className="flex">
					<Message isReceived={true}>
						<RcvdArrow className="absolute top-[0.1563rem] -left-2" />
						그럼 오늘 어디서 만날래?
					</Message>

					<div className="ml-1.5 mt-auto caption2-regular">오후 5:15</div>
				</div>
			</div>
		</div>
	);
}

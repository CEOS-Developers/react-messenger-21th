import SentArrow from '@/assets/icons/sentArrow.svg?react';
import Message from './Message';

export default function SentMessage() {
	return (
		<div className="flex justify-end py-2.5">
			<div className="caption2-regular mr-1.5 mt-auto">오후 5:19</div>

			<Message isReceived={false}>
				<SentArrow className="absolute top-[0.1563rem] -right-2" />
				나는 오늘 무릎이 아파,,,
			</Message>
		</div>
	);
}

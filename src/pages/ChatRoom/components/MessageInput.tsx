import Plus from '@/assets/icons/plus.svg?react';
import Send from '@/assets/icons/send.svg?react';

export default function MessageInput() {
	return (
		<div className="absolute bottom-0 w-full p-3 border-t border-black-200 flex gap-2 items-center bg-black-000">
			<button className="w-8 h-8 bg-black-100 rounded-full">
				<Plus className="m-auto text-black-400" />
			</button>

			<input
				type="text"
				placeholder="메시지 보내기"
				className="px-2.5 h-10 flex-grow bg-black-100 rounded-full outline-0 body1-medium message-input"
			/>

			<button
				disabled={true}
				className="w-8 h-8 bg-black-100 rounded-full disabled:text-black-200 enabled:text-main-400"
			>
				<Send className="m-auto" />
			</button>
		</div>
	);
}

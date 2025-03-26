import Plus from '@/assets/icons/plus.svg?react';
import Send from '@/assets/icons/send.svg?react';
import { ChangeEvent, useState } from 'react';

export default function MessageInput({ onSubmit }: { onSubmit: (message: string) => void }) {
	const [message, setMessage] = useState('');

	const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const handleSendButtonClick = () => {
		if (!message.trim()) return;

		onSubmit(message);
		setMessage('');
	};

	const handleEnterKeyDown = (e: React.KeyboardEvent) => {
		if (!message.trim()) return;

		if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
			onSubmit(message);
			setMessage('');
		}
	};

	return (
		<div className="absolute bottom-0 w-full p-3 border-t border-black-200 flex gap-2 items-center bg-black-000">
			<button className="w-8 h-8 bg-black-100 rounded-full">
				<Plus className="m-auto text-black-400" />
			</button>

			<input
				type="text"
				value={message}
				onChange={handleMessageChange}
				onKeyDown={handleEnterKeyDown}
				placeholder="메시지 보내기"
				className="px-2.5 h-10 flex-grow bg-black-100 rounded-full outline-0 body1-medium message-input"
			/>

			<button
				disabled={!message.trim()}
				onClick={handleSendButtonClick}
				className="w-8 h-8 bg-black-100 rounded-full disabled:text-black-200 enabled:text-main-400"
			>
				<Send className="m-auto" />
			</button>
		</div>
	);
}

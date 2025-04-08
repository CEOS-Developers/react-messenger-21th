import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Plus from '@/assets/icons/plus.svg?react';
import Send from '@/assets/icons/send.svg?react';

export default function MessageInput({ onSubmit }: { onSubmit: (message: string) => void }) {
	const [message, setMessage] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const handleSendButtonClick = () => {
		onSubmit(message);
		setMessage('');
	};

	const handleEnterKeyDown = (e: React.KeyboardEvent) => {
		if (!message.trim()) return;

		// shift + enter 입력 시 개행
		if (e.shiftKey && e.key === 'Enter') return;

		if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
			e.preventDefault(); // 개행하지 않음

			onSubmit(message);
			setMessage('');
		}
	};

	useEffect(() => {
		// 높이 자동 조절
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [message]);

	return (
		<div className="grow h-[5.875rem] p-3 border-t border-black-200 flex gap-2 items-start bg-black-000 rounded-b-4xl">
			<button className="w-8 h-8 bg-black-100 rounded-full">
				<Plus className="m-auto text-black-400" />
			</button>

			<textarea
				rows={1}
				ref={textareaRef}
				value={message}
				onChange={handleMessageChange}
				onKeyDown={handleEnterKeyDown}
				placeholder="메시지 보내기"
				className="px-5 py-2.5 max-h-[5.75rem] flex-grow flex items-center justify-center
					bg-black-100 rounded-[1.25rem] outline-0 body1-medium-lh150 message-input resize-none"
				style={{ scrollbarWidth: 'none' }}
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

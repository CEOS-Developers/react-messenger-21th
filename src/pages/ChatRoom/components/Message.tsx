import { ReactNode } from 'react';

export default function Message({ isReceived, children }: { isReceived: boolean; children: ReactNode }) {
	return (
		<div
			className={`relative px-2.5 py-2 rounded-lg body2-regular-lh150 whitespace-pre-wrap break-words
        ${isReceived ? 'bg-black-000 max-w-[13.875rem]' : 'bg-main-200 max-w-[16.625rem]'}`}
		>
			{children}
		</div>
	);
}

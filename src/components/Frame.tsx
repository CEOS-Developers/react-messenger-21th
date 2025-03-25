import { ReactNode } from 'react';

export default function Frame({ children }: { children: ReactNode }) {
	return (
		<div
			className="w-[23.4375rem] h-[45.875rem] flex flex-col m-auto
				shadow-[0_1px_10px_0_rgba(0,0,0,0.2)]"
		>
			{children}
		</div>
	);
}

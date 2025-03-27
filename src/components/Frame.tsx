import { ReactNode } from 'react';

import Cellular from '@/assets/icons/cellular.svg?react';
import Wifi from '@/assets/icons/wifi.svg?react';
import Battery from '@/assets/icons/battery.svg?react';

export default function Frame({ children }: { children: ReactNode }) {
	const bgColor = 'bg-black-200';

	return (
		<div
			className="w-[375px] flex flex-col m-auto rounded-4xl
				shadow-[0_1px_10px_0_rgba(0,0,0,0.2)]"
		>
			<div className={`pt-[1.3125rem] pb-[0.3125rem] flex-grow flex justify-between rounded-t-4xl ${bgColor}`}>
				<div
					className="ml-[3.0781rem]"
					style={{ fontFamily: 'SF Pro', fontSize: '17px', fontStyle: 'normal', fontWeight: 600, lineHeight: '22px' }}
				>
					9:41
				</div>
				<div className="mr-[1.8125rem] flex gap-[0.4375rem]">
					<Cellular />
					<Wifi />
					<Battery />
				</div>
			</div>
			{children}
		</div>
	);
}

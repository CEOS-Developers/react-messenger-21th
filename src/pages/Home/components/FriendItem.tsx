import { Color } from '@/apis/dto';
import DefaultProfile from '@/components/DefaultProfile';
import { getProfileColor } from '@/utils/getProfileColor';

export default function FriendsItem({ name, color }: { name: string; color: Color; isActive: boolean }) {
	const bgColor = getProfileColor('background', color);
	const pathColor = getProfileColor('path', color);

	return (
		<button
			onClick={() => {}}
			className="w-full py-2.5 px-5 grid grid-cols-[42px_1fr] gap-0.5 items-center 
				active:bg-black-100 transition-colors"
		>
			<div className="flex justify-center -ml-1.5">
				<DefaultProfile bgColor={bgColor} pathColor={pathColor} />
			</div>
			<div className="text-left body1-regular text-black-700">{name}</div>
		</button>
	);
}

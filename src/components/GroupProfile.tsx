import Profile from '@/assets/icons/profile.svg?react';

export default function GroupProfile({ bgColors, pathColors }: { bgColors: string[]; pathColors: string[] }) {
	const size = 17;

	return (
		<div className="relative">
			<div
				className={`absolute -top-[0.1875rem] -left-[0.1875rem] w-[1.875rem] h-[1.875rem] flex justify-center items-center
				border-[0.1875rem] border-black-000 rounded-full cursor-pointer ${bgColors[0]}`}
			>
				<Profile width={size} height={size} className={pathColors[0]} />
			</div>
			<div
				className={`absolute top-[0.5625rem] left-[0.9375rem] w-[1.875rem] h-[1.875rem] flex justify-center items-center
          border-[0.1875rem] border-black-000 rounded-full cursor-pointer ${bgColors[1]}`}
			>
				<Profile width={size} height={size} className={pathColors[1]} />
			</div>
		</div>
	);
}

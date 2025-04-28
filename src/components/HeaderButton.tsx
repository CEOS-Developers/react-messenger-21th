import clsx from 'clsx';

export default function HeaderButton({
	opacity,
	Icon,
	content,
}: {
	opacity: number;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	content?: string;
}) {
	const backgroundColor = `rgba(240, 243, 246, ${opacity === 1 ? 0 : opacity})`;
	const borderColor = `rgba(240, 243, 246, ${opacity})`;

	return (
		<button
			className={clsx(
				'flex gap-1 items-center py-2 rounded-full border text-black-400 body2-medium',
				content ? 'px-3' : 'px-2',
			)}
			style={{ backgroundColor, borderColor }}
		>
			<Icon className={`${opacity === 0.1 ? 'text-black-000' : 'text-black-400'} m-auto`} />
			{content}
		</button>
	);
}

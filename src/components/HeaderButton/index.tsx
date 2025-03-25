export default function HeaderButton({
	opacity,
	Icon,
}: {
	opacity: number;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
	const backgroundColor = `rgba(240, 243, 246, ${opacity === 1 ? 0 : opacity})`;
	const borderColor = `rgba(240, 243, 246, ${opacity})`;

	return (
		<button className="w-[2.125rem] h-[2.125rem] rounded-full border" style={{ backgroundColor, borderColor }}>
			<Icon className={`${opacity === 0.1 ? 'text-black-000' : 'text-black-400'} m-auto`} />
		</button>
	);
}

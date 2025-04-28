export default function Button({
	Icon,
	content,
	onClick,
}: {
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	content: string;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className="p-2.5 mb-4 w-[335px] flex gap-3 items-center rounded-full
			bg-main-200 text-main-400 button1-medium active:bg-blue-200 transition-colors"
		>
			<div className="w-7 h-7 flex justify-center items-center rounded-full bg-main-300">
				<Icon className="w-[1.125rem] h-[1.125rem]" color="white" />
			</div>
			{content}
		</button>
	);
}

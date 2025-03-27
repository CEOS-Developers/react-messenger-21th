import { formatDate } from '@/utils/formatDate';

export default function DateDivider({ date }: { date: Date }) {
	return (
		<div className="px-2 py-1 mx-auto mt-2.5 w-fit bg-black-100 rounded-full caption1-medium text-black-500">
			{formatDate(date)}
		</div>
	);
}

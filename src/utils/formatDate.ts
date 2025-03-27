export const formatDate = (date: Date) =>
	new Intl.DateTimeFormat('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		weekday: 'long',
	}).format(date);

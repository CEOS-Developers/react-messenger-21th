export const formatCreatedAt = (date: Date) => {
	return new Intl.DateTimeFormat('ko-KR', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	}).format(new Date(date));
};

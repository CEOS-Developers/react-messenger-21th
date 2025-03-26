export const formatCreatedAt = (date: Date) => {
	return new Intl.DateTimeFormat('ko-KR', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	}).format(new Date(date));
};

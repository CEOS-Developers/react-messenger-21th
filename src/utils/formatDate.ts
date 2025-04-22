export const formatDate = (createdAt: string) => {
	const date = new Date(createdAt);

	return new Intl.DateTimeFormat('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
		weekday: 'long',
	}).format(date);
};

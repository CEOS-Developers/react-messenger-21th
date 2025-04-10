export const formatCreatedAt = (createdAt: string) => {
	const date = new Date(createdAt);

	return new Intl.DateTimeFormat('ko-KR', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	}).format(new Date(date));
};

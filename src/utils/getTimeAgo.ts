export function getTimeAgo(createdAt: string) {
	const now = new Date();
	const date = new Date(createdAt);

	const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // 초 단위 차이

	const seconds = diff;
	const minutes = Math.floor(diff / 60);
	const hours = Math.floor(diff / 3600);
	const days = Math.floor(diff / (3600 * 24));
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30); // 평균 30일로 계산

	if (seconds < 60) return `${seconds}초 전`;
	if (minutes < 60) return `${minutes}분 전`;
	if (hours < 24) return `${hours}시간 전`;
	if (days < 7) return `${days}일 전`;
	if (weeks < 4) return `${weeks}주 전`;
	if (months < 1) return `${days}일 전`; // 4주 이상 1달 미만 → 일수 기준

	if (months < 2) return `한 달 전`; // 한 달 전
	return '몇 달 전';
}

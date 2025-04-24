const getKoreanWeekday = (date: Date): string => ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

const format12Hour = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const isAM = hours < 12;
  const period = isAM ? '오전' : '오후';

  if (!isAM && hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  return `${period} ${hours}:${minutes}`;
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const weekday = getKoreanWeekday(date);

  return `${year}년 ${month}월 ${day}일 (${weekday})`;
};

export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return '';

  return format12Hour(date);
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];

  let hours = date.getHours();
  const isAM = hours < 12;

  if (!isAM && hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  return `${year}년 ${month}월 ${day}일 (${weekday})`;
};

export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const isAM = hours < 12;
  const period = isAM ? '오전' : '오후';

  if (!isAM && hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  return `${period} ${hours}:${minutes}`;
};

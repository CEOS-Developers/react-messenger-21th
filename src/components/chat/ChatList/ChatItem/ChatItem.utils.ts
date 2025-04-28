function toPreviewTime(timestamp: number): string {
  const now = new Date();
  const date = new Date(timestamp);

  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const diffInDays = Math.floor((nowDate.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    const hours = date.getHours();
    const isAM = hours < 12;
    const formattedHour = (hours % 12 || 12).toString();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${isAM ? '오전' : '오후'} ${formattedHour}:${minutes}`;
  } else if (diffInDays === 1) {
    return '어제';
  } else {
    return `${diffInDays}일 전`;
  }
}

function truncateText(text: string, maxLength: number = 15): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

export { toPreviewTime, truncateText };

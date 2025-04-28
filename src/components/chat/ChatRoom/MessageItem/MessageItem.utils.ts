function toVisibleTime(timestamp: number): string {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const isAM = hours < 12;
  const formattedHour = hours % 12 === 0 ? 12 : hours % 12;

  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${isAM ? '오전' : '오후'} ${formattedHour}:${minutes}`;
}

export { toVisibleTime };

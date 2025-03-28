export const formatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day)); // 월은 0부터 시작

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  const weekday = weekdays[dateObj.getDay()];
  return `${parseInt(month)}월 ${parseInt(day)}일 ${weekday}`;
};

// 24시 기준
const TIME_FORMAT_OPTIONS_24: Intl.DateTimeFormatOptions = {
  timeZone: 'Asia/Seoul',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export const utcToKst24 = (utcTime: string) => {
  const utcDate = new Date(utcTime);

  const kstDate = utcDate.toLocaleString('ko-KR', TIME_FORMAT_OPTIONS_24);
  return kstDate;
};

// 12시 기준
const TIME_FORMAT_OPTIONS_12: Intl.DateTimeFormatOptions = {
  timeZone: 'Asia/Seoul',
  hour: '2-digit',
  minute: '2-digit',
};

export const utcToKst12 = (utcTime: string) => {
  const utcDate = new Date(utcTime);

  let kstDate = utcDate.toLocaleString('en-US', TIME_FORMAT_OPTIONS_12);
  const [time, amPm] = kstDate.split(' ');
  kstDate = `${amPm} ${time}`;

  return kstDate;
};

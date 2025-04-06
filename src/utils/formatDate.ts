import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const formattedToday = `${todayMonth}월 ${todayDate}일`;

  return formattedToday;
};

export const formatMessageTime = (lastMessageTime: string) => {
  if (!lastMessageTime) return '';

  const sentDate = new Date(lastMessageTime);
  const today = new Date();

  // 자정 기준 (0시 0분 0초)
  const todayStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const sentStart = new Date(
    sentDate.getFullYear(),
    sentDate.getMonth(),
    sentDate.getDate()
  );

  const diffInMilliseconds = todayStart.getTime() - sentStart.getTime();

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return format(sentDate, 'a h:mm', { locale: ko });
  }

  if (diffInDays === 1) {
    return '어제';
  }

  return `${sentDate.getMonth() + 1}월 ${sentDate.getDate()}일`;
};

export const formatMessageDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const daysOfWeek = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}`;
};

export const isSameDate = (dateA: string, dateB: string) => {
  const dateAObj = new Date(dateA);
  const dateBObj = new Date(dateB);

  return (
    dateAObj.getFullYear() === dateBObj.getFullYear() &&
    dateAObj.getMonth() === dateBObj.getMonth() &&
    dateAObj.getDate() === dateBObj.getDate()
  );
};

export const isSameTimeGroup = (dateA: string, dateB: string) => {
  const dateAObj = new Date(dateA);
  const dateBObj = new Date(dateB);

  return (
    dateAObj.getHours() === dateBObj.getHours() &&
    dateAObj.getMinutes() === dateBObj.getMinutes()
  );
};

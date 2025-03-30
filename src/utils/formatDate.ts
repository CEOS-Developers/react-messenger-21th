import { format, parseISO } from 'date-fns';
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

  const date = parseISO(lastMessageTime);
  const formattedDate = format(date, 'a h:mm', { locale: ko });

  return formattedDate;
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

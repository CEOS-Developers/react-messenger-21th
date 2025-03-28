import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDate = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const formattedToday = `${todayMonth}월 ${todayDate}일`;

  return formattedToday;
};

export const formatLastMessageTime = (lastMessageTime: string) => {
  if (!lastMessageTime) return '';

  const date = parseISO(lastMessageTime);
  const formattedDate = format(date, 'a h:mm', { locale: ko });

  return formattedDate;
};

export const formatDate = () => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  const formattedToday = `${todayMonth}월 ${todayDate}일`;

  return formattedToday;
};

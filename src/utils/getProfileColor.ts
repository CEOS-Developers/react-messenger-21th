const defaultProfileBgColors = ['#4B84FF', '#3860B7', '#2B3E68'];

// 닉네임에 따른 색상 배정해주는 해시 함수 구현
export const getProfileColor = (username: string): string => {
  let hash = 0;

  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash); // 계산 속도를 위해 시프트 연산자 사용
  }

  const index = Math.abs(hash) % defaultProfileBgColors.length; // signed number 처리를 위해 Math.abs 사용
  return defaultProfileBgColors[index];
};

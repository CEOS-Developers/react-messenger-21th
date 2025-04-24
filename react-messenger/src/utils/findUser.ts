// 'user'면 친구 목록에서 해당 유저를 찾고,
// 'group'이면 그룹 목록에서 찾음
// 지금 보고 있는 프로필이 내 프로필인지(true/false)

import users from '@/data/users.json';

export const findUser = (id: number, type: string | null, myProfile: any) => {
  // 1:1 채팅일 경우
  if (type === 'user') {
    // 내 프로필을 보는 경우
    if (id === myProfile.id) return { user: myProfile, isMine: true };

    // 친구 목록에서 해당 유저 찾기
    const user = [...(users.newFriends || []), ...(users.friends || [])].find((u) => u.id === id);
    return { user, isMine: false };
  }

  // 그룹 채팅일 경우
  if (type === 'group') {
    // 그룹 리스트에서 해당 그룹 찾기
    const group = users.groups?.find((g) => g.id === id);
    return { user: group, isMine: false };
  }

  // 유효하지 않은 타입이거나 찾을 수 없을 경우
  return { user: null, isMine: false };
};

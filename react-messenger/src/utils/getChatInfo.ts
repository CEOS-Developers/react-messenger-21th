// 유저 ID, 타입, 내 ID를 받아서
// 기존 채팅방이 있는지 확인, 없으면 새로운 chatId 생성
// 채팅방 ID랑 타입('user' | 'group')을 리턴해주는 함수

import messages from '@/data/messages.json';

export const getChatInfo = (
  userId: number,
  userType: string | null,
  myId: number,
): { chatId: number; chatType: 'user' | 'group' } => {
  // 기존 채팅방 중에 해당 유저(또는 그룹)과의 채팅방이 있는지 찾음
  const found = messages.find((chat) => {
    if (userType === 'group') {
      return chat.chatType === 'group' && chat.targetUserId === userId;
    }

    // 1:1 채팅방 찾기
    return (
      chat.chatType === 'user' &&
      ((chat.targetUserId === userId && chat.messages.some((m) => m.senderId === myId)) ||
        (chat.targetUserId === myId && chat.messages.some((m) => m.senderId === userId)))
    );
  });

  // 기존 채팅방이 없으면 가장 큰 ID + 1로 새로운 chatId 할당
  const nextId = Math.max(...messages.map((chat) => chat.chatId)) + 1;
  const chatId = found?.chatId ?? nextId;

  const chatType: 'user' | 'group' = found?.chatType === 'group' || userType === 'group' ? 'group' : 'user';

  return { chatId, chatType };
};

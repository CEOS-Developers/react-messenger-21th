import { v5 as uuidv5 } from 'uuid';

// 아무 UUID 문자열 사용 가능
const CHAT_ROOM_UUID_NAMESPACE = 'b95f2f8b-021d-4b1f-a09b-72a1b5e7b40d';

export const generateChatRoomId = (userId1: string, userId2: string) => {
  const [a, b] = [userId1, userId2].sort();
  const compositeId = `${a}_${b}`;

  return uuidv5(compositeId, CHAT_ROOM_UUID_NAMESPACE);
};

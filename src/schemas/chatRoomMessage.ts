import { z } from 'zod';

// 메세지 형식
export const chatRoomMessage = z.object({
  messageId: z.string().uuid(),
  senderId: z.string().uuid(),
  content: z.string(),
  type: z.enum(['text', 'image', 'video', 'audio', 'file']),
  sentAt: z.string().datetime(),
});

export type ChatRoomMessage = z.infer<typeof chatRoomMessage>;

// 특정 채팅방 내 메세지 목록
export const chatRoomMessageList = z.array(chatRoomMessage);
export type ChatRoomMessageList = z.infer<typeof chatRoomMessageList>;

// 채팅방 목록 및 메세지 리스트
export const messagesByRoom = z.record(z.string().uuid(), chatRoomMessageList);
export type MessagesByRoom = z.infer<typeof messagesByRoom>;

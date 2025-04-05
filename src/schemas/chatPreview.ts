import { z } from 'zod';

export const chatMember = z.object({
  userId: z.string().uuid(),
  username: z.string(),
  profileImage: z.nullable(z.string().url()),
});

export const chatPreview = z.object({
  roomId: z.string().uuid(),
  roomName: z.string(),
  isGroup: z.boolean(),
  participants: z.array(chatMember),
  lastMessage: z.object({
    messageId: z.string().uuid(),
    senderId: z.string().uuid(),
    senderName: z.string(),
    content: z.string(),
    type: z.enum(['text', 'image', 'video', 'audio', 'file']),
    sentAt: z.string().datetime(),
  }),
  unreadCount: z.number().int().positive(),
});

export type ChatMember = z.infer<typeof chatMember>;
export type ChatPreview = z.infer<typeof chatPreview>;

import { z } from 'zod';

export const chatPreview = z.object({
  roomId: z.string().uuid(),
  roomName: z.string(),
  isGroup: z.boolean(),
  participants: z.array(
    z.object({
      userId: z.string().uuid(),
      username: z.string(),
      profileImage: z.nullable(z.string().url()),
    })
  ),
  lastMessage: z.object({
    senderId: z.string().uuid(),
    content: z.string(),
    type: z.enum(['text', 'image', 'video', 'audio', 'file']),
    sentAt: z.string().datetime(),
  }),
  unreadCount: z.number().int().positive(),
});

export type ChatPreview = z.infer<typeof chatPreview>;

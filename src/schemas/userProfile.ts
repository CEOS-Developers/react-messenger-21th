import { z } from 'zod';

export const userProfileWithoutId = z.object({
  username: z.string(),
  profileImage: z.string(),
  snsUrl: z.string(),
});

export type UserProfileWithoutId = z.infer<typeof userProfileWithoutId>;

export const userProfile = z.object({
  userId: z.nullable(z.string().uuid()),
  username: z.string(),
  profileImage: z.string(),
  snsUrl: z.string(),
});

export type UserProfile = z.infer<typeof userProfile>;

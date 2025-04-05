import { Chat } from '../interface/Chat'

export default function getUnreadCount(
  chats: Record<string, Chat[]>,
  lastSeenTime: number
): number {
  let count = 0

  const sortedDates = Object.keys(chats).sort((a, b) => b.localeCompare(a))

  for (const date of sortedDates) {
    const messages = chats[date]
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i]
      if (message.id <= lastSeenTime) return count
      count++
    }
  }

  return count
}

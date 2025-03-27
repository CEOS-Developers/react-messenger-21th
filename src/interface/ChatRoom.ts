import { UserId } from './User'
import { Chat } from './Chat'

export type ChatRoomId = string

export interface ChatRoom {
  chatRoomId: ChatRoomId
  roomName: string | null
  member: UserId[]
  chats: {
    [key: string]: Chat[]
  }
}

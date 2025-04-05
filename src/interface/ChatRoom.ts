import { UserId } from './User'
import { Chat } from './Chat'

export type ChatRoomId = number

export type Chats = {
  [key: string]: Chat[]
}

export interface ChatRoom {
  chatRoomId: ChatRoomId
  roomName: string | null
  member: UserId[]
  chats: Chats
}

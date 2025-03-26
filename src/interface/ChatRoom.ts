import { UserId } from './User'
import { ChatId } from './Chat'

export type ChatRoomId = number

type Chats = {
  [key: string]: ChatId[]
}

export interface ChatRoom {
  chatRoomId: ChatRoomId
  roomName: string
  member: UserId[]
  chats: Chats
}

import { UserId } from './User'

export type ChatId = number

export interface Chat {
  id: ChatId
  sender: UserId
  content: string
}

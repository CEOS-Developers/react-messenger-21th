import { ChatRoomId } from './ChatRoom'

export type UserId = number

type JoinedRoom = {
  chatRoomId: ChatRoomId
  lastSeenTime: number
}

export interface User {
  id: UserId
  name: string
  profileMessage: string
  profileColor: string
  joinedRooms: JoinedRoom[]
  friends: UserId[]
  profileImgUrl?: string
  snsUrl?: string
}

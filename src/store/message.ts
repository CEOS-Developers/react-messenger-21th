import { atom } from "jotai";
export type ChatRooms = {
  [key: string]: ChatRoomInfo;
};
export type ChatRoomInfo = {
  users: User[];
  type: string;
  messages: ChatMessages;
};
export type ChatMessages = {
  [key: string]: ChatMessageInfo[];
};
export type ChatMessageInfo = {
  id: number;
  user: User;
  otherUser: User;
  text: string;
  time: string;
};
export type User = {
  id: number;
  name: string;
  status: string;
};
export type Users = User[];
export const usersAtom = atom<Users>([
  { id: 1, name: "이주희", status: "online" },
  { id: 2, name: "김상곤", status: "online" },
]);
export const userAtom = atom<User>({
  id: 1,
  name: "이주희",
  status: "online",
});
const messages = {
  "2025/3/20": [
    {
      id: 1,
      user: { id: 1, name: "이주희", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "ㅎㅇㅎㅇ",
      time: "12시 30분",
    },
    {
      id: 2,
      user: { id: 2, name: "김상곤", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "안녕하세요",
      time: "12시 31분",
    },
  ],
  "2025/3/21": [
    {
      id: 3,
      user: { id: 1, name: "이주희", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "과제 좀 그만내라",
      time: "12시 36분",
    },
  ],
  "2025/3/22": [
    {
      id: 4,
      user: { id: 2, name: "김상곤", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "ㅇㅇ ㅋ",
      time: "12시 40분",
    },
  ],
};
const messages2 = {
  "2025/3/20": [
    {
      id: 1,
      user: { id: 1, name: "이주희", status: "online" },
      otherUser: { id: 2, name: "배성일", status: "online" },
      text: "ㅎㅇㅎㅇ",
      time: "12시 30분",
    },
  ],
};
export const chatMessagesAtom = atom<ChatMessages>(messages);
export const chatRoomTypeAtom = atom<"personal" | "group">("personal");
export const chatRoomAtom = atom<ChatRoomInfo>();
export const chatRoomsAtom = atom<ChatRooms>({
  "1": {
    users: [
      { id: 1, name: "이주희", status: "online" },
      { id: 2, name: "김상곤", status: "online" },
    ],
    type: "personal",
    messages: messages,
  },
  "2": {
    users: [
      { id: 1, name: "이주희", status: "online" },
      { id: 2, name: "배성일", status: "online" },
    ],
    type: "personal",
    messages: messages2,
  },
});

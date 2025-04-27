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
  profileImg?: string;
  status: string;
};
export type Users = User[];
export type UserListItem = {
  user: User;
  phoneNumber: string;
  birth: string;
  email: string;
  introduce?: string;
};
export const friendLists: UserListItem[] = [
  {
    user: { id: 1, name: "박재영", status: "대화 가능" },
    phoneNumber: "010-1234-5678",
    birth: "2003-08-07",
    email: "apple@apple.com",
    introduce: "안녕하세요",
  },
  {
    user: { id: 2, name: "김상곤", status: "대화 불가능" },
    phoneNumber: "010-1234-5678",
    birth: "1970-01-02",
    email: "sangona@kakao.com",
  },
  {
    user: { id: 3, name: "배성일", status: "대화 가능" },
    phoneNumber: "010-1234-5678",
    birth: "1990-01-02",
    email: "pae@google.com",
  },
];
export const usersAtom = atom<Users>([
  { id: 1, name: "이주희", status: "대화 가능" },
  { id: 2, name: "김상곤", status: "대화 가능" },
]);
export const userAtom = atom<UserListItem>({
  user: { id: 1, name: "이주희", status: "대화 가능" },
  phoneNumber: "010-1234-5678",
  birth: "2003-08-07",
  email: "juhee@hongik.ac.kr",
});
const messages = {
  "2025/3/20": [
    {
      id: 1,
      user: { id: 1, name: "이주희", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "ㅎㅇㅎㅇ",
      time: "오전 12:30",
    },
    {
      id: 2,
      user: { id: 2, name: "김상곤", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "안녕하세요",
      time: "오전 12:31",
    },
  ],
  "2025/3/21": [
    {
      id: 3,
      user: { id: 1, name: "이주희", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "과제 좀 그만내라",
      time: "오후 12:36",
    },
  ],
  "2025/3/22": [
    {
      id: 4,
      user: { id: 2, name: "김상곤", status: "online" },
      otherUser: { id: 2, name: "김상곤", status: "online" },
      text: "ㅇㅇ ㅋ",
      time: "오전 12:40",
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
});

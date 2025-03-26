import { atom } from "jotai";

export type ChatMessages = {
  [key: string]: ChatMessage[];
};
export type ChatMessage = {
  id: number;
  user: User;
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

export const chatMessagesAtom = atom<ChatMessages[]>([
  {
    "2021-10-20": [
      {
        id: 1,
        user: { id: 1, name: "이주희", status: "online" },
        text: "ㅎㅇㅎㅇ",
        time: "12시 30분",
      },
      {
        id: 2,
        user: { id: 2, name: "김상곤", status: "online" },
        text: "안녕하세요",
        time: "12시 31분",
      },
      {
        id: 3,
        user: { id: 1, name: "이주희", status: "online" },
        text: "과제 좀 그만내라",
        time: "12시 36분",
      },
    ],
  },
]);

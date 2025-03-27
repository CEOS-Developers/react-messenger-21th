// mockData.ts
import { v4 as uuidv4 } from 'uuid';
import { User, ChatRoom } from '../components/states/chatSlice'; // 경로 확인!

export const idForMe = uuidv4();

export const friends: User[] = [
  {
    id: uuidv4(),
    name: '김서연',
    image: '/assets/icons/ProfileDarkGreyS.svg',
  },
  {
    id: uuidv4(),
    name: '성이름',
    image: '/assets/icons/ProfileGreyS.svg',
  },
  {
    id: uuidv4(),
    name: '강수진',
    image: '/assets/icons/ProfileWhiteS.svg',
  },
  {
    id: uuidv4(),
    name: '이화여자대학교',
    image: '/assets/icons/ProfileGreyS.svg',
  },
];

export const me: User = {
  id: idForMe,
  name: '이지후',
  image: '/assets/icons/ProfileWhiteS.svg',
};

export const chatRooms: ChatRoom[] = [
  {
    id: 'room1',
    participants: [idForMe, friends[0].id],
    messages: [
      {
        id: uuidv4(),
        senderId: friends[0].id,
        text: '안녕!',
        timestamp: new Date().toISOString(),
        isMine: false,
      },
      {
        id: uuidv4(),
        senderId: idForMe,
        text: '안녕! 반가워~',
        timestamp: new Date().toISOString(),
        isMine: true,
      },
    ],
  },
  {
    id: 'room2',
    participants: [idForMe, friends[1].id],
    messages: [
      {
        id: uuidv4(),
        senderId: friends[1].id,
        text: '배고프당 마싯는 거 먹고 싶당',
        timestamp: new Date().toISOString(),
        isMine: false,
      },
    ],
  },
  {
    id: 'room3',
    participants: [idForMe, friends[3].id],
    messages: [
      {
        id: uuidv4(),
        senderId: idForMe,
        text: '공대 셔틀 안 만들어 줘?',
        timestamp: new Date().toISOString(),
        isMine: true,
      },
      {
        id: uuidv4(),
        senderId: friends[3].id,
        text: '응 안 만들어 줘',
        timestamp: new Date().toISOString(),
        isMine: false,
      },
    ],
  },
];

export const chatRoomData = [
  {
    roomId: 101,
    participant: [1, 2],
    roomName: '채팅 테스트 데이터 1',
    participantsCount: 2,
    prevMessage: ['1마지막 배포 언제야?', '2오늘 회의 어땠어?'],
    lastMessageTime: '2025-03-28T14:32:00Z',
    unReadCount: 2,
  },
  {
    roomId: 202,
    participant: [1, 3],
    roomName: '채팅 테스트 데이터 2',
    participantsCount: 2,
    prevMessage: ['1번째 최근 채팅', '2번째 최근 채팅'],
    lastMessageTime: '2025-03-28T03:15:00Z',
    unReadCount: 5,
  },
  {
    roomId: 301,
    participant: [1, 3],
    roomName: 'mock data',
    participantsCount: 2,
    prevMessage: ['리액트 훅 정리해봤어', '다음 주 주제는?'],
    lastMessageTime: '2025-03-27T20:44:00Z',
    unReadCount: 0,
  },
  {
    roomId: 302,
    participant: [1, 2],
    roomName: 'mock data',
    participantsCount: 2,
    prevMessage: ['저녁 뭐 먹을래?', '엄마가 오늘 늦으신대'],
    lastMessageTime: '2025-03-27T18:12:00Z',
    unReadCount: 3,
  },
  {
    roomId: 303,
    participant: [1, 3],
    roomName: 'mock data',
    participantsCount: 2,
    prevMessage: ['UI 수정했어요', '프로토타입 확인해주세요'],
    lastMessageTime: '2025-03-27T09:05:00Z',
    unReadCount: 1,
  },
  {
    roomId: 304,
    participant: [1, 2, 3],
    roomName: 'mock data',
    participantsCount: 3,
    prevMessage: ['모임 언제 할까?', '다음 경기장 잡았어'],
    lastMessageTime: '2025-03-26T22:48:00Z',
    unReadCount: 0,
  },
  {
    roomId: 305,
    participant: [1, 2, 3, 4, 5, 6, 7],
    roomName: 'mock data',
    participantsCount: 7,
    prevMessage: ['단체복 사이즈 입력해줘', '졸업사진 언제 찍지?'],
    lastMessageTime: '2025-03-26T19:30:00Z',
    unReadCount: 4,
  },
];

export const users = [
  {
    userId: 1,
    name: '세오스',
    profileImageUrl: '',
  },
  {
    userId: 2,
    name: '이오스',
    profileImageUrl: '',
  },
  {
    userId: 3,
    name: '일오스',
    profileImageUrl: '',
  },
];

export const chatMock = {
  chatRoomId: 101,
  chatUserId: [1, 2],
  chat: [
    {
      senderName: '이오스',
      text: '채팅방 초기 진입 시 스크롤 아래로 이동',
      timestamp: '2025-03-12T22:20:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '상단 이름 클릭 시 사용자 변경',
      timestamp: '2025-03-12T22:21:15.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '내가 보낸 메시지는 오른쪽, 상대방은 왼쪽 정렬',
      timestamp: '2025-03-12T22:22:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '채팅 말풍선은 최대 4줄까지 자동 확장',
      timestamp: '2025-03-12T22:22:45.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '텍스트 입력창 placeholder, 텍스트 색상 구분',
      timestamp: '2025-03-12T22:23:30.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: 'textarea에서 줄바꿈하면 높이 늘어남',
      timestamp: '2025-03-12T22:24:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '입력값이 있으면 보내기 아이콘 색상 변경',
      timestamp: '2025-03-12T22:25:20.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '보내기 클릭 시 채팅 localStorage에 저장',
      timestamp: '2025-03-12T22:25:55.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '채팅 입력 시 자동으로 스크롤 맨 아래 이동',
      timestamp: '2025-03-12T22:26:03.000Z',
      isRead: false,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '상대방 메시지에만 읽음 처리 적용',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '읽음 상태는 채팅방 입장 시 자동 업데이트',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '이오스',
      text: '채팅 말풍선을 더블탭하면 하트 표시됨',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
      isLiked: true,
    },
  ],
};

export const chatMock2 = {
  chatRoomId: 202,
  chatUserId: [1, 3],
  chat: [
    {
      senderName: '세오스',
      text: '안녕하세요~',
      timestamp: '2025-03-25T08:12:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '일오스',
      text: '안녕하세요! 오늘 날씨 너무 좋네요 ☀️',
      timestamp: '2025-03-25T08:12:45.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '맞아요!!\n점심에 나가서 산책도 좀 하려고요 ㅎㅎ',
      timestamp: '2025-03-25T08:13:20.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '일오스',
      text: '오 좋네요!\n저도 끝나고 근처 카페 좀 다녀오려구요.',
      timestamp: '2025-03-25T08:14:03.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '혹시 저번에 말했던 자료 정리하신 거 있으실까요?',
      timestamp: '2025-03-25T08:15:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '일오스',
      text: '[회의자료_정리본.pptx]',
      timestamp: '2025-03-25T08:15:35.000Z',
      isRead: false,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '감사합니다!\n오늘 중으로 피드백 드릴게요 🙏',
      timestamp: '2025-03-25T08:16:03.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '일오스',
      text: '넵넵 언제든지 천천히 주세요~',
      timestamp: '2025-03-25T08:16:55.000Z',
      isRead: false,
      isLiked: false,
    },
    {
      senderName: '세오스',
      text: '이번에 정리 진짜 깔끔하게 잘하신 것 같아요!',
      timestamp: '2025-03-25T08:18:00.000Z',
      isRead: true,
      isLiked: false,
    },
    {
      senderName: '일오스',
      text: '감사해요ㅎㅎ 다음 회의 때 뵈어요!',
      timestamp: '2025-03-25T08:18:45.000Z',
      isRead: false,
      isLiked: false,
    },
  ],
};

export const chatMockList = [chatMock, chatMock2]; // 여러 채팅방 데이터 배열로 묶기

// src/assets/data.ts

export interface Cafe {
  id: number;
  name: string;
  description?: string;
  iconUrl?: string; // 아이콘이 정해져 있지 않다면 기본 아이콘 사용
}

export const cafes: Cafe[] = [
  {
    id: 1,
    name: '예술과 법',
    description: '창의와 정의의 교차점',
  },
  {
    id: 2,
    name: '2025 흥익시디',
    description: '흥익대 시각디자인과 25학번',
  },
  {
    id: 3,
    name: '사회문화적 디자인',
    description: '사회와 함께하는 디자인 사고',
  },
  {
    id: 4,
    name: '2024 흥익시디',
    description: '흥익대 시각디자인과 24학번',
  },
  {
    id: 5,
    name: '2023 흥익시디',
    description: '흥익대 시각디자인과 23학번',
  },
];

// src/assets/data.ts

// 기존 users, cafes 등 import 문 아래에 추가하세요

/**
 * 카페별 회원 ID 매핑
 * key: cafeId
 * value: 해당 카페에 속한 userId 배열
 */
export const cafeMembers: Record<number, number[]> = {
  1: [1, 2, 3], // '예술과 법' 카페의 멤버: 세오스(1), 이오스(2), 일오스(3)
  2: [1, 3], // '2025 흥익시디' 카페의 멤버: 세오스(1), 일오스(3)
};

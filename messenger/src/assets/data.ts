export const chatRoomData = [
  {
    roomId: 101, // chatMock.chatRoomId
    roomName: '채팅 테스트 데이터 1',
    participantsCount: 2,
    prevMessage: ['1마지막 배포 언제야?', '2오늘 회의 어땠어?'],
    lastMessageTime: '2025-03-28T14:32:00Z',
    unReadCount: 2,
  },
  {
    roomId: 202, // chatMock2.chatRoomId
    roomName: '박오스',
    participantsCount: 2,
    prevMessage: ['1번째 최근 채팅', '2번째 최근 채팅'],
    lastMessageTime: '2025-03-28T03:15:00Z',
    unReadCount: 5,
  },
  // 그 외 나머지 방들은 아직 mock 없음, roomId만 부여
  {
    roomId: 301,
    roomName: '세오스',
    participantsCount: 2,
    prevMessage: ['리액트 훅 정리해봤어', '다음 주 주제는?'],
    lastMessageTime: '2025-03-27T20:44:00Z',
    unReadCount: 0,
  },
  {
    roomId: 302,
    roomName: '이오스',
    participantsCount: 2,
    prevMessage: ['저녁 뭐 먹을래?', '엄마가 오늘 늦으신대'],
    lastMessageTime: '2025-03-27T18:12:00Z',
    unReadCount: 3,
  },
  {
    roomId: 303,
    roomName: '일오스',
    participantsCount: 2,
    prevMessage: ['UI 수정했어요', '프로토타입 확인해주세요'],
    lastMessageTime: '2025-03-27T09:05:00Z',
    unReadCount: 1,
  },
  {
    roomId: 304,
    roomName: '축구팀 단톡',
    participantsCount: 3,
    prevMessage: ['모임 언제 할까?', '다음 경기장 잡았어'],
    lastMessageTime: '2025-03-26T22:48:00Z',
    unReadCount: 0,
  },
  {
    roomId: 305,
    roomName: '졸업준비위원회',
    participantsCount: 7,
    prevMessage: ['단체복 사이즈 입력해줘', '졸업사진 언제 찍지?'],
    lastMessageTime: '2025-03-26T19:30:00Z',
    unReadCount: 4,
  },
  {
    roomId: 306,
    roomName: '여행 가자!',
    participantsCount: 5,
    prevMessage: ['숙소 예약했어', '맛집 리스트 공유함'],
    lastMessageTime: '2025-03-26T13:03:00Z',
    unReadCount: 6,
  },
  {
    roomId: 307,
    roomName: '회사 공지방',
    participantsCount: 20,
    prevMessage: ['3월 근태 마감 안내', '연차 입력 부탁드립니다'],
    lastMessageTime: '2025-03-26T09:00:00Z',
    unReadCount: 0,
  },
  {
    roomId: 308,
    roomName: '동아리방',
    participantsCount: 8,
    prevMessage: ['총회는 언제?', '간식 뭐 사올까?'],
    lastMessageTime: '2025-03-26T08:30:00Z',
    unReadCount: 2,
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
      text: '안녕하세요!',
      timestamp: '2025-03-12T22:20:00.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '안녕하세요~ 오스님!',
      timestamp: '2025-03-12T22:21:15.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '혹시 오늘 카페 일정 괜찮으세요?',
      timestamp: '2025-03-12T22:22:00.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '네 괜찮아요! 3시쯤 어때요?',
      timestamp: '2025-03-12T22:22:45.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '좋습니다 😊 장소는 언제나처럼 뚜레쥬르 앞이죠?좋습니다 😊 장소는 언제나처럼 뚜레쥬르 앞이죠?좋습니다 😊 장소는 언제나처럼 뚜레쥬르 앞이죠?좋습니다 😊 장소는 언제나처럼 뚜레쥬르 앞이죠?',
      timestamp: '2025-03-12T22:23:30.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '네 맞아요\n거기서 봬요!',
      timestamp: '2025-03-12T22:24:00.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '내일 발표 자료 공유해 주실 수 있나요?',
      timestamp: '2025-03-12T22:25:20.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '지금 바로 드릴게요! 잠시만요.',
      timestamp: '2025-03-12T22:25:55.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '[발표자료_최종.pdf]',
      timestamp: '2025-03-12T22:26:03.000Z',
      isRead: false,
    },
    {
      senderName: '이오스',
      text: '오! 감사합니다. 바로 확인해볼게요~',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '오! 감사합니다. 바로 확인해볼게요~',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '오! 감사합니다. 바로 확인해볼게요~',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
    },
    {
      senderName: '이오스',
      text: '오! 감사합니다. 바로 확인해볼게요~',
      timestamp: '2025-03-12T22:27:00.000Z',
      isRead: true,
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
    },
    {
      senderName: '일오스',
      text: '안녕하세요! 오늘 날씨 너무 좋네요 ☀️',
      timestamp: '2025-03-25T08:12:45.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '맞아요!!\n점심에 나가서 산책도 좀 하려고요 ㅎㅎ',
      timestamp: '2025-03-25T08:13:20.000Z',
      isRead: true,
    },
    {
      senderName: '일오스',
      text: '오 좋네요!\n저도 끝나고 근처 카페 좀 다녀오려구요.',
      timestamp: '2025-03-25T08:14:03.000Z',
      isRead: true,
    },
    {
      senderName: '세오스',
      text: '혹시 저번에 말했던 자료 정리하신 거 있으실까요?',
      timestamp: '2025-03-25T08:15:00.000Z',
      isRead: true,
    },
    {
      senderName: '일오스',
      text: '[회의자료_정리본.pptx]',
      timestamp: '2025-03-25T08:15:35.000Z',
      isRead: false,
    },
    {
      senderName: '세오스',
      text: '감사합니다!\n오늘 중으로 피드백 드릴게요 🙏',
      timestamp: '2025-03-25T08:16:03.000Z',
      isRead: true,
    },
    {
      senderName: '일오스',
      text: '넵넵 언제든지 천천히 주세요~',
      timestamp: '2025-03-25T08:16:55.000Z',
      isRead: false,
    },
    {
      senderName: '세오스',
      text: '이번에 정리 진짜 깔끔하게 잘하신 것 같아요!',
      timestamp: '2025-03-25T08:18:00.000Z',
      isRead: true,
    },
    {
      senderName: '일오스',
      text: '감사해요ㅎㅎ 다음 회의 때 뵈어요!',
      timestamp: '2025-03-25T08:18:45.000Z',
      isRead: false,
    },
  ],
};

export const chatMockList = [chatMock, chatMock2]; // 여러 채팅방 데이터 배열로 묶기

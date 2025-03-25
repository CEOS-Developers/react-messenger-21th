import styled from 'styled-components';

// ✅ 전체 채팅 페이지 (그리드 레이아웃 적용)
export const ChatContainer = styled.div<{ isEmojiOpen: boolean }>`
  width: 375px;
  height: 812px;
  display: grid;
  grid-template-rows: 96px 1fr ${({ isEmojiOpen }) =>
      isEmojiOpen ? '260px' : '94px'};
  // ✅ 상단 바(96px) | 채팅 내용(스크롤 가능) | 입력창(94px) or 이모티콘 창(260px)
  border: 5px solid grey;
  overflow: hidden;
`;

// ✅ 상단 바 (고정)
export const UpperBarContainer = styled.div`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  z-index: 100;
`;

// ✅ 채팅 내용 (내부만 스크롤 가능)
export const ChatContentsContainer = styled.div`
  min-height: 0; // ✅ 스크롤 문제 방지 (부모가 고정된 높이를 가질 때 필요)
  overflow-y: auto; // ✅ 내부에서만 스크롤 가능하게 변경
  padding: 10px;
  display: grid;
  flex-direction: column;
  grid-auto-rows: min-content; // 자식 요소가 내용을 초과하지 않도록 설정
`;

// ✅ 하단 입력창 (고정, 절대 밀리지 않음)
export const BottomBarContainer = styled.div<{ isEmojiOpen: boolean }>`
  height: ${({ isEmojiOpen }) => (isEmojiOpen ? '260px' : '94px')};
  display: flex;
  align-items: center;
  background-color: white;
  border-top: 1px solid #ddd;
  z-index: 101;
`;

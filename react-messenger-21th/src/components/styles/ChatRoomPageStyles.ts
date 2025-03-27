import styled from 'styled-components';

// 전체 채팅 페이지 (그리드 레이아웃 적용)
export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 48px 1fr auto; // 마지막 줄을 auto로
  box-sizing: border-box;
`;

// 상단 바 (고정)
export const UpperBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  z-index: 100;
`;

// 채팅 내용 (내부만 스크롤 가능)
export const ChatContentsContainer = styled.div`
  width: 100dvw
  min-height: 0; // 스크롤 문제 방지 (부모가 고정된 높이를 가질 때 필요)
  overflow-y: auto; // 내부에서만 스크롤 가능하게 변경
  display: grid;
  flex-direction: column;
  grid-auto-rows: min-content; // 자식 요소가 내용을 초과하지 않도록 설정
  background: var(--Grey-Grey01, #f3f4f6);
`;

// 하단 입력창 (고정, 절대 밀리지 않음)
export const BottomBarContainer = styled.div<{ isEmojiOpen: boolean }>`
  height: auto;
  align-items: stretch;
  width: 100dvw;
  display: flex;
  padding: 12px 20px 0px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

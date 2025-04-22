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
  width: 100%;
  min-height: 0; // 스크롤 문제 방지 (부모가 고정된 높이를 가질 때 필요)
  overflow-y: auto; // 내부에서만 스크롤 가능하게 변경
  display: grid;
  flex-direction: column;
  grid-auto-rows: min-content; // 자식 요소가 내용을 초과하지 않도록 설정
  background: var(--Grey-Grey01, #f3f4f6);
`;

// 하단 입력창 (고정, 절대 밀리지 않음)
export const BottomBarContainer = styled.div`
  height: auto;
  align-items: stretch;
  width: 100%;
  display: flex;
  padding: 12px 20px 12px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

export const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px; // 여기만 바닥에서 띄움
`;

// 왼쪽, 가운데, 오른쪽 그룹 정렬
export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CenterGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const PartnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CurrentPartnersName = styled.span`
  cursor: pointer;
  margin: 0px;
  color: var(--Grey-Grey09, #111827);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

export const CurrentUsersNumber = styled.span`
  color: var(--Grey-Grey04, #9ca3af);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

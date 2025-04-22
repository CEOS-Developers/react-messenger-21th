import styled from 'styled-components';

// 전체 한 줄 (좌우 정렬 포함)
export const BubbleRow = styled.div<{ isMine: boolean }>`
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  padding: 4px;
`;

// 프로필
export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36px;
  gap: 4px;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
`;

export const UserName = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey07};
  text-align: center;
  margin-left: 4px;
  margin-bottom: 4px;
`;

// 말풍선 + 시간
export const MessageBlock = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column; // 세로로 정렬!
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  gap: 4px;
`;

export const Bubble = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) => (isMine ? '#D1D5DB' : '#FEFEFE')};
  border: ${({ isMine }) => (isMine ? '' : '1px solid #D1D5DB')};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  font-size: 14px;
  max-width: 200px;
  white-space: pre-wrap;
  padding: 8px 12px;
`;

export const Timestamp = styled.div<{ isMine: boolean }>`
  margin: 4px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey05};
  text-align: ${({ isMine }) => (isMine ? 'left' : 'right')};
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  letter-spacing: -0.15px;
`;

export const MessageWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`;

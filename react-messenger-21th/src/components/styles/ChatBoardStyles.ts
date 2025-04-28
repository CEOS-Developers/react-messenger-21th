import styled from 'styled-components';
// 전체 채팅 보드 스타일
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
`;

// 날짜 스탬프 스타일
export const DateStamp = styled.div<{ $isLastOfGroup: boolean }>`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.caption1.fontSize};
  color: ${({ theme }) => theme.colors.grey05};
  padding: ${({ $isLastOfGroup }) =>
    $isLastOfGroup ? '20px 20px 8px 20px' : '12px 20px 8px 20px'};
`;

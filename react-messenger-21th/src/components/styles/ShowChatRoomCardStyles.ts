import styled from 'styled-components';

// styled-components
export const CardWrapper = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.main : 'transparent'};
  transition: background-color 0.6s ease;

  width: 100%;
  display: flex;
  padding: 4px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProfileImages = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  padding-bottom: 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const ProfileImage = styled.img``;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TopRow = styled.div``;

export const PinIconWrapper = styled.span`
  margin-left: 8px;
`;

export const RoomName = styled.div`
  color: ${({ theme }) => theme.colors.grey07};
  /* Label/Label */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

export const TimeStamp = styled.div`
  align-self: stretch;
  color: #6b7280;
  text-align: right;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  letter-spacing: -0.15px;
`;

export const LastMessage = styled.div`
  width: 228px;
  height: 16px;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.grey06};
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.21px;
`;

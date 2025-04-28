import styled from 'styled-components';

// 스타일
export const ListWrapper = styled.div`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  justify-content: center;
`;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey07};
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey05};
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey06};
`;

export const FriendItem = styled.div`
  display: flex;
  width: 351px;
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between; /* 요거 추가! */
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const FriendInfo = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  gap: 20px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.grey09};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

export const Status = styled.div`
  margin-left: auto;
  display: flex;
  height: 20px;
  padding: 4px 10px;
  align-self: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.white};
`;

export const StatusText = styled.span`
  display: -webkit-box;
  max-width: 80px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: center;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  text-overflow: ellipsis;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  letter-spacing: -0.15px;
`;

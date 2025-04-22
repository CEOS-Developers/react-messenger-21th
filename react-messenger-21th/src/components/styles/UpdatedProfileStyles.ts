import styled from 'styled-components';

// 스타일
export const Section = styled.div``;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey05};
  display: flex;
  padding: 8px 20px 4px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

export const ProfileList = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export const ProfileItem = styled.div`
  display: flex;
  width: 44px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
`;

export const Name = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey09};
  align-self: stretch;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

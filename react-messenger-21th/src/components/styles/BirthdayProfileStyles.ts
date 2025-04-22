import styled from 'styled-components';

// src/components/friendsComponents/BirthdayProfiles.tsx
export const Section = styled.div``;

export const HeaderRow = styled.div`
  display: flex;
  padding: 12px 20px 4px 20px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey06};
`;

export const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey05};
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

export const BirthdayItemWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;

export const GivePresentIconWrapper = styled.div`
  align-self: center;
`;

export const BirthdayItem = styled.div`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileImgGroup = styled.div`
  display: flex;
  width: 46px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: center;
`;
export const BirthdayIconWrapper = styled.div`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const ProfileImage = styled.img`
  display: flex;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const TextGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  align-self: center;
  padding-left: 15px;
  padding-right: 96px;
`;

export const Name = styled.div`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.grey09};
  padding-right: 4px;
  font-size: 16px;
  line-height: 24px; /* 150% */
`;

export const Birthday = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey05};
`;

//-----------------------------------------------
//

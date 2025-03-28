// src/components/friendsComponents/BirthdayProfiles.tsx
import React from 'react';
import styled from 'styled-components';

const BirthdayProfiles: React.FC = () => {
  return (
    <Section>
      <SectionTitle>🎂 생일인 친구</SectionTitle>
      <BirthdayItem>
        <ProfileImage src="/assets/icons/ProfileDarkGreyS.svg" />
        <TextGroup>
          <Name>김서연</Name>
          <Birthday>3월 30일</Birthday>
        </TextGroup>
        <GiftButton>선물하기</GiftButton>
      </BirthdayItem>
    </Section>
  );
};

export default BirthdayProfiles;

// 스타일
const Section = styled.div`
  padding: 16px 20px 0;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.point};
  margin-bottom: 8px;
`;

const BirthdayItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

const TextGroup = styled.div`
  flex: 1;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.grey08};
`;

const Birthday = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey06};
`;

const GiftButton = styled.button`
  background: ${({ theme }) => theme.colors.main};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

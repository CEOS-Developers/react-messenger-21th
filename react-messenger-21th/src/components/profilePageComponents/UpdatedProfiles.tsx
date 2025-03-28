// src/components/friendsComponents/UpdatedProfiles.tsx
import React from 'react';
import styled from 'styled-components';

// mock 데이터 등으로 대체해서 연결해도 되고, 추후 props로 받아도 좋아요
const UpdatedProfiles: React.FC = () => {
  return (
    <Section>
      <SectionTitle>업데이트된 프로필</SectionTitle>
      <ProfileList>
        {/* 여기에 map 돌릴 예정 */}
        <ProfileItem>
          <ProfileImage src="/assets/icons/ProfileGreyS.svg" alt="업뎃 친구" />
          <Name>성이름</Name>
        </ProfileItem>
        {/* ... */}
      </ProfileList>
    </Section>
  );
};

export default UpdatedProfiles;

// 스타일
const Section = styled.div`
  padding: 16px 20px 0;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey06};
  margin-bottom: 8px;
`;

const ProfileList = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey07};
  margin-top: 4px;
`;

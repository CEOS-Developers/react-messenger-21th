// src/components/friendsComponents/UpdatedProfiles.tsx
import React from 'react';
import styled from 'styled-components';

interface User {
  id: string;
  name: string;
  image: string;
  isUpdated?: boolean;
}

interface Props {
  users: User[];
}
const UpdatedProfiles: React.FC<Props> = ({ users }) => {
  const updatedUsers = users?.filter((user) => user.isUpdated) || [];

  if (updatedUsers.length === 0) return null;

  return (
    <Section>
      <SectionTitle>업데이트한 프로필 {updatedUsers.length}</SectionTitle>
      <ProfileList>
        {updatedUsers.map((user) => (
          <ProfileItem key={user.id}>
            <ProfileImage src={user.image} />
            <Name>{user.name}</Name>
          </ProfileItem>
        ))}
      </ProfileList>
    </Section>
  );
};

export default UpdatedProfiles;

// 스타일
const Section = styled.div``;

const SectionTitle = styled.div`
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

const ProfileList = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const ProfileItem = styled.div`
  display: flex;
  width: 44px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
`;

const Name = styled.div`
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

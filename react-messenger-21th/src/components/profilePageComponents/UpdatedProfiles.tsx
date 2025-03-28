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
      <SectionTitle>업데이트된 프로필</SectionTitle>
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

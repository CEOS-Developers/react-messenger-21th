// src/components/friendsComponents/UpdatedProfiles.tsx
import React from 'react';

import * as s from '../styles/UpdatedProfileStyles';

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
    <s.Section>
      <s.SectionTitle>업데이트한 프로필 {updatedUsers.length}</s.SectionTitle>
      <s.ProfileList>
        {updatedUsers.map((user) => (
          <s.ProfileItem key={user.id}>
            <s.ProfileImage src={user.image} />
            <s.Name>{user.name}</s.Name>
          </s.ProfileItem>
        ))}
      </s.ProfileList>
    </s.Section>
  );
};

export default UpdatedProfiles;

import { useState } from 'react';

import * as s from '../styles/MyProfileStyles';
import ProfileModal from '../profileModalComponents/ProfileModal';

interface User {
  id: string;
  name: string;
  image: string;
  statusMessage?: string;
}

interface Props {
  me: User;
}

const MyProfile = ({ me }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div>
      <s.MyProfileWrapper onClick={() => setSelectedUser(me)}>
        <s.ProfileInfoGroup>
          <s.ProfileImage src={me.image} alt="내 프로필" />
          <s.MyName>{me.name}</s.MyName>
        </s.ProfileInfoGroup>
        <s.StatusMessage>
          <s.StatusText>{me.statusMessage || '상태메시지'}</s.StatusText>
        </s.StatusMessage>
      </s.MyProfileWrapper>

      {selectedUser && (
        <ProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default MyProfile;

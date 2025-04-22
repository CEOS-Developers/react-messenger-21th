// src/components/friendsComponents/FriendList.tsx
import { idForMe } from '../../mocks/mockData'; // 내 ID 가져오기
import { useState } from 'react'; // 토글 버튼용

import * as s from '../styles/FriendListStyles';
import ProfileModal from '../profileModalComponents/ProfileModal';

import ToggleDown from '/public/assets/icons/ToggleDown.svg?react';
import ToggleUp from '/public/assets/icons/ToggleUp.svg?react';

interface User {
  id: string;
  name: string;
  image: string;
  statusMessage?: string;
}

interface Props {
  users: User[];
}

const FriendList = ({ users }: Props) => {
  const [isOpen, setIsOpen] = useState(true); // 기본값: 토글 오픈
  const friends = users.filter((user) => user.id !== idForMe); // 나 빼기!
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <s.ListWrapper>
      <s.HeaderRow>
        <s.SectionTitle>친구 {friends.length}</s.SectionTitle>
        <s.ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <ToggleDown width="24px" height="24" />
          ) : (
            <ToggleUp width="24px" height="24" />
          )}
        </s.ToggleButton>
      </s.HeaderRow>

      {isOpen &&
        friends.map((user) => (
          <s.FriendItem key={user.id} onClick={() => setSelectedUser(user)}>
            <s.FriendInfo>
              <s.ProfileImage src={user.image} />
              <s.Name>{user.name}</s.Name>
            </s.FriendInfo>
            <s.Status>
              <s.StatusText>{user.statusMessage || '상태메시지'}</s.StatusText>
            </s.Status>
          </s.FriendItem>
        ))}

      {selectedUser && (
        <ProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </s.ListWrapper>
  );
};

export default FriendList;

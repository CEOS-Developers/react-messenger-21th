// src/components/friendsComponents/BirthdayProfiles.tsx
import { useState } from 'react'; // 토글 버튼용

import ProfileModal from '../profileModalComponents/ProfileModal';
import * as s from '../styles/BirthdayProfileStyles';

import GivePresentIcon from '/public/assets/icons/GivePresentIcon.svg?react';
import ToggleDown from '/public/assets/icons/ToggleDown.svg?react';
import ToggleUp from '/public/assets/icons/ToggleUp.svg?react';

// 타입 정의
interface User {
  id: string;
  name: string;
  image: string;
  birthday?: Date;
}

interface Props {
  users: User[];
}

const BirthdayProfiles = ({ users }: Props) => {
  const [isOpen, setIsOpen] = useState(true); // 기본값: 토글 오픈
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // 생일자인 유저 반환
  const today = new Date();

  const birthdayUsers = users.filter(
    (user): user is User & { birthday: Date } => {
      if (!user.birthday) return false;
      return (
        user.birthday.getMonth() === today.getMonth() &&
        user.birthday.getDate() === today.getDate()
      );
    },
  );

  return birthdayUsers.length > 0 ? (
    <s.Section>
      <s.HeaderRow>
        <s.SectionTitle>생일인 친구 {birthdayUsers.length}</s.SectionTitle>
        <s.ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <ToggleDown width="24px" height="24" />
          ) : (
            <ToggleUp width="24px" height="24" />
          )}
        </s.ToggleButton>
      </s.HeaderRow>
      <s.BirthdayItemWrapper>
        {isOpen &&
          birthdayUsers.map((user) => (
            <s.BirthdayItem key={user.id} onClick={() => setSelectedUser(user)}>
              <s.ProfileImage src={user.image} />
              <s.TextGroup>
                <s.Name>{user.name}</s.Name>
                <s.Birthday>
                  | 오늘 {user.birthday.getMonth() + 1}월{' '}
                  {user.birthday.getDate()}일
                </s.Birthday>
              </s.TextGroup>
              <s.GivePresentIconWrapper>
                <GivePresentIcon width="56px" height="20px" />
              </s.GivePresentIconWrapper>
            </s.BirthdayItem>
          ))}

        {selectedUser && (
          <ProfileModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </s.BirthdayItemWrapper>
    </s.Section>
  ) : null;
};

export default BirthdayProfiles;

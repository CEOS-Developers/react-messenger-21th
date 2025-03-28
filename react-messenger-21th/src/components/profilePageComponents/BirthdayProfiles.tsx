// src/components/friendsComponents/BirthdayProfiles.tsx
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'; // 토글 버튼용

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

const BirthdayProfiles: React.FC<Props> = ({ users }) => {
  const [isOpen, setIsOpen] = useState(true); // 기본값: 토글 오픈
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
    <Section>
        
      <SectionTitle>생일인 친구</SectionTitle>
      {birthdayUsers.map((user) => (
        <BirthdayItem key={user.id}>
          <ProfileImage src={user.image} />
          <TextGroup>
            <Name>{user.name}</Name>
            <Birthday>
              {user.birthday.getMonth() + 1}월 {user.birthday.getDate()}일
            </Birthday>
          </TextGroup>
          <GiftButton>선물하기</GiftButton>
        </BirthdayItem>
      ))}
    </Section>
  ) : null;
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

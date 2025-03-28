// src/components/friendsComponents/BirthdayProfiles.tsx
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'; // 토글 버튼용
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
      <HeaderRow>
        <SectionTitle>생일인 친구 {birthdayUsers.length}</SectionTitle>
        <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <ToggleDown width="24px" height="24" />
          ) : (
            <ToggleUp width="24px" height="24" />
          )}
        </ToggleButton>
      </HeaderRow>
      <BirthdayItemWrapper>
        {isOpen &&
          birthdayUsers.map((user) => (
            <BirthdayItem key={user.id}>
              <ProfileImage src={user.image} />
              <TextGroup>
                <Name>{user.name}</Name>
                <Birthday>
                  | 오늘 {user.birthday.getMonth() + 1}월{' '}
                  {user.birthday.getDate()}일
                </Birthday>
              </TextGroup>
              <GivePresentIconWrapper>
                <GivePresentIcon width="56px" height="20px" />
              </GivePresentIconWrapper>
            </BirthdayItem>
          ))}
      </BirthdayItemWrapper>
    </Section>
  ) : null;
};

export default BirthdayProfiles;

// 스타일
const Section = styled.div``;

const HeaderRow = styled.div`
  display: flex;
  padding: 12px 20px 4px 20px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey06};
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey04};
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

const BirthdayItemWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;

const GivePresentIconWrapper = styled.div`
  align-self: center;
`;

const BirthdayItem = styled.div`
  display: flex;
  height: 56px;
  justify-content: center;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 46px;
  height: 45px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const TextGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  align-self: center;
  padding-left: 15px;
  padding-right: 96px;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.grey09};
  padding-right: 4px;
`;

const Birthday = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey04};
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

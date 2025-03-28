// src/components/friendsComponents/FriendList.tsx
import React from 'react';
import styled from 'styled-components';
import { idForMe } from '../../mocks/mockData'; // 내 ID 가져오기
import { useState } from 'react'; // 토글 버튼용
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

const FriendList: React.FC<Props> = ({ users }) => {
  const [isOpen, setIsOpen] = useState(true); // 기본값: 토글 오픈
  const friends = users.filter((user) => user.id !== idForMe); // 나 빼기!

  return (
    <ListWrapper>
      <HeaderRow>
        <SectionTitle>친구 {friends.length}</SectionTitle>
        <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <ToggleDown width="24px" height="24" />
          ) : (
            <ToggleUp width="24px" height="24" />
          )}
        </ToggleButton>
      </HeaderRow>

      {isOpen &&
        friends.map((user) => (
          <FriendItem key={user.id}>
            <FriendInfo>
              <ProfileImage src={user.image} />
              <Name>{user.name}</Name>
            </FriendInfo>
            <Status>
              <StatusText>{user.statusMessage || '상태메시지'}</StatusText>
            </Status>
          </FriendItem>
        ))}
    </ListWrapper>
  );
};

export default FriendList;

// 스타일
const ListWrapper = styled.div`
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey07};
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey05};
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.012px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey06};
`;

const FriendItem = styled.div`
  display: flex;
  width: 351px;
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between; /* 요거 추가! */
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

const FriendInfo = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  gap: 20px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.grey09};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

const Status = styled.div`
  margin-left: auto;
  display: flex;
  height: 20px;
  padding: 4px 10px;
  align-self: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.white};
`;

const StatusText = styled.span`
  display: -webkit-box;
  max-width: 80px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: center;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  text-overflow: ellipsis;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 150% */
  letter-spacing: -0.15px;
`;

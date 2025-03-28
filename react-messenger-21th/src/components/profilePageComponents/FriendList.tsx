// src/components/friendsComponents/FriendList.tsx
import React from 'react';
import styled from 'styled-components';
import { idForMe } from '../../mocks/mockData'; // 내 ID 가져오기
import { useState } from 'react'; // 토글 버튼용

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
        <SectionTitle>친구</SectionTitle>
        <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? '▲' : '▼'}
        </ToggleButton>
      </HeaderRow>

      {isOpen &&
        friends.map((user) => (
          <FriendItem key={user.id}>
            <ProfileImage src={user.image} />
            <FriendInfo>
              <Name>{user.name}</Name>
              <Status>
                {user.statusMessage || '상태메시지를 입력하세요.'}
              </Status>
            </FriendInfo>
          </FriendItem>
        ))}
    </ListWrapper>
  );
};

export default FriendList;

// 스타일
const ListWrapper = styled.div`
  padding: 16px 20px;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.typography.caption1}
  color: ${({ theme }) => theme.colors.grey07};
  margin-bottom: 8px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  margin-bottom: 12px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

const FriendInfo = styled.div`
  margin-left: 12px;
`;

const Name = styled.div`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.grey08};
`;

const Status = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey06};
`;

// src/components/friendsComponents/FriendList.tsx
import React from 'react';
import styled from 'styled-components';

interface User {
  id: string;
  name: string;
  image: string;
  birthday?: Date;
}

interface Props {
  users: User[];
}

const FriendList: React.FC<Props> = () => {
  return (
    <ListWrapper>
      <SectionTitle>친구</SectionTitle>
      <FriendItem>
        <ProfileImage src="/assets/icons/ProfileWhiteS.svg" />
        <FriendInfo>
          <Name>강수진</Name>
          <Status>요즘 디프프 힘들다...</Status>
        </FriendInfo>
      </FriendItem>
      {/* ...반복 */}
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

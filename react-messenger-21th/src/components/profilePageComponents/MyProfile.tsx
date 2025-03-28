import React from 'react';
import styled from 'styled-components';

interface User {
  id: string;
  name: string;
  image: string;
  statusMessage?: string;
}

interface Props {
  me: User;
}

const MyProfile: React.FC<Props> = ({ me }) => {
  return (
    <MyProfileWrapper>
      <ProfileImage src={me.image} alt="내 프로필" />
      <ProfileTextGroup>
        <MyName>{me.name}</MyName>
        <StatusMessage>
          {me.statusMessage || '상태메시지를 입력하세요.'}
        </StatusMessage>
      </ProfileTextGroup>
    </MyProfileWrapper>
  );
};

const MyProfileWrapper = styled.div``;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

const ProfileTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyName = styled.div`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.colors.grey08};
`;

const StatusMessage = styled.div`
  ${({ theme }) => theme.typography.caption2}
  color: ${({ theme }) => theme.colors.grey06};
`;

export default MyProfile;

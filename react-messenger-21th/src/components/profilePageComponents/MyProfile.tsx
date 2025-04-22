import { useState } from 'react';
import styled from 'styled-components';
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
      <MyProfileWrapper onClick={() => setSelectedUser(me)}>
        <ProfileInfoGroup>
          <ProfileImage src={me.image} alt="내 프로필" />
          <MyName>{me.name}</MyName>
        </ProfileInfoGroup>
        <StatusMessage>
          <StatusText>{me.statusMessage || '상태메시지'}</StatusText>
        </StatusMessage>
      </MyProfileWrapper>

      {selectedUser && (
        <ProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

const MyProfileWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

const MyName = styled.div`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.colors.grey09};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
  letter-spacing: -0.27px;
`;

const StatusMessage = styled.div`
  display: flex;
  height: 26px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
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
  flex: 1 0 0;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.grey09};
  text-align: right;
  text-overflow: ellipsis;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;

export default MyProfile;

import React from 'react';
import styled from 'styled-components';
import { User } from '../states/chatSlice';

interface Props {
  user: User;
  onClose: () => void;
}

const ProfileModal = ({ user, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <StatusMessage>{user.statusMessage}</StatusMessage>
        <ProfileImg src={user.image} alt={user.name} />
        <ContentContainer>
          <UserName>{user.name}</UserName>
        </ContentContainer>
      </ModalContent>
    </Overlay>
  );
};

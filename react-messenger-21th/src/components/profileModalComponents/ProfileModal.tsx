import styled from 'styled-components';
import { User } from '../states/chatSlice';
import ProfileGreyL from '/public/assets/icons/ProfileGreyL.svg?react';
import ModalChatIcon from '/public/assets/icons/ModalChatIcon.svg?react';
import ModalCallIcon from '/public/assets/icons/ModalCallIcon.svg?react';
import ModalVideoCallIcon from '/public/assets/icons/ModalVideoCallIcon.svg?react';
import ModalPresentButtonIcon from '/public/assets/icons/ModalPresentButtonIcon.svg?react';
import ModalMoneyButtonIcon from '/public/assets/icons/ModalMoneyButtonIcon.svg?react';
import ModalStarButtonIcon from '/public/assets/icons/ModalStarButtonIcon.svg?react';
import ModalCloseIcon from '/public/assets/icons/ModalCloseIcon.svg?react';

interface Props {
  user: User;
  onClose: () => void;
}

const ProfileModal = ({ user, onClose }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <UpperBarContent>
        <ModalCloseIcon />
        <RightButtonWrapper>
          <ModalPresentButtonIcon width="16px" height="16px" />
          <ModalMoneyButtonIcon width="16px" height="12.8px" />
          <ModalStarButtonIcon width="20px" height="20px" />
        </RightButtonWrapper>
      </UpperBarContent>
      <ModalContent>
        <StatusMessage>{user.statusMessage}</StatusMessage>
        <ProfileWrapper>
          <ProfileGreyL width="120px" height="120px" flex-shrink="0" />
        </ProfileWrapper>
        <ContentWrapper onClick={(e) => e.stopPropagation()}>
          <UserInfoContainer>
            <UserName>{user.name}</UserName>
            <UserPhone>010-1234-5678</UserPhone>
          </UserInfoContainer>
          <ButtonContainer>
            <ButtonAndTextContainer>
              <ModalChatIcon width="52px" height="52px" />
              <ButtonText>1:1 채팅</ButtonText>
            </ButtonAndTextContainer>
            <ButtonAndTextContainer>
              <ModalCallIcon width="52px" height="52px" />
              <ButtonText>통화하기</ButtonText>
            </ButtonAndTextContainer>
            <ButtonAndTextContainer>
              <ModalVideoCallIcon width="52px" height="52px" />
              <ButtonText>페이스톡</ButtonText>
            </ButtonAndTextContainer>
          </ButtonContainer>
        </ContentWrapper>
      </ModalContent>
    </Overlay>
  );
};

export default ProfileModal;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px; // PC 최대 너비 제한
  max-height: 728px; // PC 최대 높이 제한
  min-height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: var(--Grey-Grey05, #6b7280);
  justify-content: center;
  justify-self: center;
  align-items: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 100vw;
    height: 100dvh;
    max-width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
    box-shadow: none;
  }
`;

const UpperBarContent = styled.div`
  display: flex;
  padding: 14px 21px 14px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const RightButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StatusMessage = styled.p`
  display: flex;
  height: 356px;
  padding: 40px 20px 102px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 375px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 360px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  border-radius: 40px 40px 0px 0px;
  background: var(--Grey-Grey01, #f3f4f6);
`;

const UserInfoContainer = styled.div`
  display: flex;
  padding: 90px 10px 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const UserName = styled.p`
  color: var(--Grey-Grey08, #1f2937);
  text-align: center;

  /* Headline/head */
  font-family: 'Pretendard Variable';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
`;

const UserPhone = styled.p`
  align-self: stretch;
  color: var(--Grey-Grey05, #6b7280);
  text-align: center;

  /* Label/Label */
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
  align-self: stretch;
`;

const ButtonAndTextContainer = styled.div`
  display: flex;
  width: 52px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ButtonText = styled.p`
  align-self: stretch;
  color: var(--Grey-Grey07, #374151);
  text-align: center;

  /* Caption/Caption1 */
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;

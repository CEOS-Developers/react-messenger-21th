import { User } from '../states/chatSlice';

import * as s from '../styles/ProfileModalStyles';

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
    <s.Overlay onClick={onClose}>
      <s.UpperBarContent>
        <ModalCloseIcon />
        <s.RightButtonWrapper>
          <ModalPresentButtonIcon width="16px" height="16px" />
          <ModalMoneyButtonIcon width="16px" height="12.8px" />
          <ModalStarButtonIcon width="20px" height="20px" />
        </s.RightButtonWrapper>
      </s.UpperBarContent>
      <s.ModalContent>
        <s.StatusMessage>{user.statusMessage}</s.StatusMessage>
        <s.ProfileWrapper>
          <ProfileGreyL width="120px" height="120px" flex-shrink="0" />
        </s.ProfileWrapper>
        <s.ContentWrapper onClick={(e) => e.stopPropagation()}>
          <s.UserInfoContainer>
            <s.UserName>{user.name}</s.UserName>
            <s.UserPhone>010-1234-5678</s.UserPhone>
          </s.UserInfoContainer>
          <s.ButtonContainer>
            <s.ButtonAndTextContainer>
              <ModalChatIcon width="52px" height="52px" />
              <s.ButtonText>1:1 채팅</s.ButtonText>
            </s.ButtonAndTextContainer>
            <s.ButtonAndTextContainer>
              <ModalCallIcon width="52px" height="52px" />
              <s.ButtonText>통화하기</s.ButtonText>
            </s.ButtonAndTextContainer>
            <s.ButtonAndTextContainer>
              <ModalVideoCallIcon width="52px" height="52px" />
              <s.ButtonText>페이스톡</s.ButtonText>
            </s.ButtonAndTextContainer>
          </s.ButtonContainer>
        </s.ContentWrapper>
      </s.ModalContent>
    </s.Overlay>
  );
};

export default ProfileModal;

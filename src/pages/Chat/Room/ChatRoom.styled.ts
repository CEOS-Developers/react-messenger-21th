import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export const ChatRoomContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.Grayscale[200]};
`;

export const ChatRoomHeaderSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 6.2rem;
  padding: 1.6rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.Grayscale[200]};
`;

export const TotalUnreadCount = styled.span`
  ${({ theme }) => theme.fontStyles.Body1_medium}
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;

export const ChatRoomName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${({ theme }) => theme.fontStyles.Headline6};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;

const OptionButtonLinkStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackToChatRoomLink = styled(Link)`
  width: fit-content;
  height: fit-content;

  ${OptionButtonLinkStyle}
  gap: 0.6rem;
`;

export const ChatRoomHeaderOptionButton = styled.button`
  width: fit-content;
  height: fit-content;

  ${OptionButtonLinkStyle}
`;

export const ChatRoomHeaderOptions = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

// 채팅방 메시지 섹션
export const ChatRoomMessageSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 6.2rem 2rem 7rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatMessageBoxWrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

// 채팅방 입력 섹션
export const ChatRoomInputSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: fit-content;
  padding: 0.8rem 1.2rem;

  display: flex;
  align-items: center;

  background: #fbfbfb;
`;

export const InputOptionButton = styled.button`
  width: 2.6rem;
  height: 2.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.Grayscale[200]};
`;

export const ChatRoomInputForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const ChatTextareaContainer = styled.div`
  position: relative;

  flex: 1;

  width: 100%;
  height: fit-content;
  margin: 0 0.8rem;
`;

export const ChatTextarea = styled.textarea`
  width: 100%;
  padding: 0.6rem 4rem 0.6rem 1.2rem;

  border-radius: 18px;

  ${({ theme }) => theme.fontStyles.Body2_regular};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};

  background: ${({ theme }) => theme.colors.Grayscale[200]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.Grayscale[500]};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmojiButton = styled.button`
  position: absolute;
  top: 47%;
  right: 0.6rem;
  transform: translateY(-50%);
  z-index: 1000;

  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled(motion.button)`
  width: 2.6rem;
  height: 2.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

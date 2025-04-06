import styled from 'styled-components';
import { motion } from 'motion/react';

export const SearchBarAnimationBox = styled(motion.div)`
  width: 100%;
  height: fit-content;
`;

export const ChatListContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const NoChatListContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoChatListText = styled.p`
  text-align: center;

  ${({ theme }) => theme.fontStyles.Body2_regular};
  color: ${({ theme }) => theme.colors.Grayscale[400]};
`;

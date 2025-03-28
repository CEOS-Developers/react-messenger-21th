import { motion } from 'motion/react';
import styled from 'styled-components';

export const ChatRoomContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.Grayscale[200]};
`;

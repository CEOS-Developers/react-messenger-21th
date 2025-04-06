import styled, { css } from 'styled-components';
import { motion } from 'motion/react';

export const SearchBarContainer = styled(motion.div)`
  width: 100%;
  height: 3.2rem;
  padding: 0 2rem;
  margin: 0.4rem 0 0.8rem 0;
`;

export const SearchInputContainer = styled.div<{ $isFocused: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0.4rem 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.Grayscale[100]};

  ${({ $isFocused }) =>
    $isFocused &&
    css`
      outline: 2px solid ${({ theme }) => theme.colors.Primary.MainBlue};
    `}
`;

export const SearchInput = styled.input`
  flex: 1;

  width: 100%;
  height: 100%;
  padding: 0;

  ${({ theme }) => theme.fontStyles.Body2_regular};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Grayscale[600]};
  }
`;

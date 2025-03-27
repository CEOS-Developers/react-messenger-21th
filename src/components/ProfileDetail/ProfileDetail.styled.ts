import styled from 'styled-components';
import { motion } from 'motion/react';

export const ProfileDetailContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.Grayscale[600]};
`;

export const ProfileDetailHeaderSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 1.6rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileDetailSubOptionList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ProfileDetailOptionItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const ProfileDetailOptionButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
`;

export const ProfileDetailOptionLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.fontStyles.Caption1_medium};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Grayscale[0]};
`;

export const ProfileDetailMainSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileUsername = styled.p`
  margin: 1rem 0 3.8rem;

  ${({ theme }) => theme.fontStyles.Headline6}
  color: ${({ theme }) => theme.colors.Grayscale[0]};
`;

export const ProfileDetailMainOptionSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 2.4rem 0 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${({ theme }) => theme.colors.Grayscale[500]};
`;

export const ProfileDetailMainOptionList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

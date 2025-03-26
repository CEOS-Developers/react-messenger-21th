import styled from 'styled-components';
import { Link } from 'react-router';

export const TabBarContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 80px;
  padding: 0.8rem 3rem 3.2rem;

  background: #fbfbfb;
`;

export const TabBarList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabBarItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const TabBarLink = styled(Link)`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const TabBarOption = styled.p<{ $isSelected: boolean }>`
  ${({ theme }) => theme.fontStyles.Caption2};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.Primary.MainBlue : theme.colors.Grayscale[500]};
`;

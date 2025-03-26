import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: fit-content;
  padding: 1.6rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Headline5};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;

export const HeaderNavBar = styled.nav`
  width: fit-content;
  height: fit-content;
`;

export const HeaderOptionList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const HeaderOptionItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const HeaderOptionButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
`;

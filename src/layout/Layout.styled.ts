import styled from 'styled-components';

export const TopLevelContainer = styled.div`
  position: relative;

  width: 375px;
  height: 812px;

  background: ${({ theme }) => theme.colors.Grayscale[0]};
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 70px 0 80px 0;
`;

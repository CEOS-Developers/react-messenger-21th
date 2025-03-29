import styled from 'styled-components';

export const TopLevelContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.Grayscale[0]};

  overflow: hidden;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 70px 0 80px 0;

  overflow-y: scroll;
`;

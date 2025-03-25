// src/components/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';
import Pretendard from '/srx/assets/fonts/Pretendard-Medium.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/src/assets/fonts/Pretendard-Medium.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyle;

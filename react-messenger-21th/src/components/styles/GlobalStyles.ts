// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import pretendardFont from '/public/assets/fonts/Pretendard-Medium.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url(${pretendardFont}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #ffffff;
    color: #000000;
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;

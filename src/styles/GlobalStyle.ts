import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --statusbar-height: 49.71px;
    --phone-margin: 16px;
    --phone-gutter: 12px;
  }

  /* Font */
  html, body {
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #000000;
  }
  
  /* Phone screen */
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;

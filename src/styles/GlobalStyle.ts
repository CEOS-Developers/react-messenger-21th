import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --statusbar-height: 50px;
    --navbar-height: 83px;
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

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 45px;
    aspect-ratio: 1;
    --c: no-repeat linear-gradient(#000 0 0);
    background: 
      var(--c) 0%   50%,
      var(--c) 50%  50%,
      var(--c) 100% 50%;
    background-size: 20% 100%;
    animation: l1 1s infinite linear;
  }
  @keyframes l1 {
    0%  {background-size: 20% 100%,20% 100%,20% 100%}
    33% {background-size: 20% 10% ,20% 100%,20% 100%}
    50% {background-size: 20% 100%,20% 10% ,20% 100%}
    66% {background-size: 20% 100%,20% 100%,20% 10% }
    100%{background-size: 20% 100%,20% 100%,20% 100%}
  }
`;

export default GlobalStyle;

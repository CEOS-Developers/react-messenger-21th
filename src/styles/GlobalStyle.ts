import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard Variable';
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: url('../assets/font/PretendardVariable.woff2') format('woff2-variations');
}

body, html {
  margin: 0;
  height: 100%;
}

body{
  font-family: 'Pretendard', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyle

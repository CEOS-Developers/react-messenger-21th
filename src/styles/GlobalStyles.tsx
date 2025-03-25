import { createGlobalStyle } from "styled-components";
import pretendardWoof2 from "/PretendardVariable.woff2";

const GlobalStyles = createGlobalStyle`
   @font-face {
        font-family: "Pretendard Variable";
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: url(${pretendardWoof2}) format("woff2-variations");
    }
    :root{
    }
    * {
        box-sizing: border-box;
        font-family: 'Pretendard Variable', sans-serif;
    }
    body {
        background:rgb(225, 225, 225);
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    ul{
        list-style: none;
    }
`;

export default GlobalStyles;

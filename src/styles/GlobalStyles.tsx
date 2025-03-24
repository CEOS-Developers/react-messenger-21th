import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
    }
    * {
        box-sizing: border-box;
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

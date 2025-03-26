import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-primary: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: var(--font-primary);
        background: ${({ theme }) => theme.colors.Grayscale[1000]};
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    ul,li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        border: none;
        padding: 0;
        background: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
